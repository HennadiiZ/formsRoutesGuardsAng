// ======= 1st
// import {Injectable} from '@angular/core';
// @Injectable({providedIn: 'root'})
// export class AuthService {
//     private isAuth = false;
//     login(){
//         this.isAuth = true;
//     }
//     logout(){
//         this.isAuth = false;
//     }
//     isAuthenticated(): Promise<boolean> {
//          return new Promise(resolve=>{
//              setTimeout(()=>{
//                  resolve(this.isAuth)
//              }, 1000)
//          })
//     }
// }



// ======= 2nd
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FbAuthResponse, User } from './interfaces';
import { catchError, tap } from 'rxjs/operators'

@Injectable({providedIn: 'root'})
export class AuthService {

    private isAuth = false;
    public error$: Subject<string> = new Subject<string>();

    constructor(private http: HttpClient){}

    get token(): any {
        
        const expDate = new Date(localStorage.getItem('fb-token-exp') as string)
        if(new Date() > expDate){
            this.logout()
            return null as any
        }

        return localStorage.getItem('fb-token') as string
    }

    login(user: User): Observable<any>{
        //this.isAuth = true;
        user.returnSecureToken = true;
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
        .pipe(
            tap(this.setToken),
            catchError(this.handleError.bind(this))
        )

    }

    logout(){
        // this.isAuth = false;
        this.setToken(null)
    }

    isAuthenticated(): boolean {
         return !!this.token
    }

    private handleError(error: HttpErrorResponse){
        const {message} = error.error.error

        // console.log(message)
        switch(message){
            case 'INVALID_EMAIL':
                this.error$.next('wrong email')
                break;
            case 'INVALID_PASSWORD':
                this.error$.next('wrong password')
                break;
            case 'EMAIL_NOT_FOUND':
                this.error$.next('email not found')
                break;    
        }

        return throwError(error)
    }

    private setToken(response: any){
    //private setToken(response: FbAuthResponse | null){
        if(response){
            console.log(response)
            const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
            localStorage.setItem('fb-token', response.idToken)
            localStorage.setItem('fb-token-exp', expDate.toString())
        } else {
            localStorage.clear()
        }

    }
}