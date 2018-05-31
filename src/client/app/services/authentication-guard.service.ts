import { AuthenticationService } from './authentication.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationGuardService implements CanActivate {

    constructor(public authenticationService: AuthenticationService, public router: Router) { }

    canActivate(): boolean {
        if (false) { // is not authenticated
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
