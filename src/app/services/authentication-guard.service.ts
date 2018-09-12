import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuardService implements CanActivate {

    constructor(public authenticationService: AuthenticationService, public router: Router) { }

    canActivate(): boolean {
        if (this.authenticationService.isLoggedOut()) { // is not authenticated
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
