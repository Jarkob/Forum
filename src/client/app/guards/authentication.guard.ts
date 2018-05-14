import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        // const loggedIn = true;
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        // validate user

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
