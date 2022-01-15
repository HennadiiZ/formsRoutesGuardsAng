import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(
        private authService: AuthService,
        private router: Router
    ){}
 
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):Observable<boolean> | Promise<boolean> | boolean {
          const isAuth = this.authService.isAuthenticated();
        // if (isAuth) {
        if (this.authService.isAuthenticated()) {    
            return true;
        } else {
            this.authService.logout()
            return this.router.navigate(['/log-in'], {
                queryParams: {
                    auth: false
                }
            });
        }
    }
}










// The auth guard is an angular route guard that's 
// used to prevent unauthenticated users from accessing 
// restricted routes, it does this by implementing 
// the CanActivate interface which allows 
// the guard to decide if a route can be activated 
// with the canActivate() method. 
// If the method returns true the route is activated 
// (allowed to proceed), otherwise if the method returns 
// false the route is blocked.

// import { AuthenticationService } from '@app/_services';