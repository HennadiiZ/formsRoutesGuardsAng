import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  constructor(
    private router: Router,
    public auth: AuthService,
    private http: HttpClient //
  ){}

  ngOnInit(){
    // this.http.get('http://tcentr.jetsoftpro.com/docs#/auth/sign_up_auth_sign_up_post')
    // this.http.get('http://tcentr.jetsoftpro.com/docs#/auth/sign_out_auth_sign_out_get')
    
    // this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
    // .subscribe(response=>{
    //   console.log( 'responseee' ,response);
    //   this.todos = response
    // })
  }

  logout(event: Event){
      event.preventDefault();
      this.auth.logout();
      this.router.navigate(['/', 'log-in']);

  }


}
