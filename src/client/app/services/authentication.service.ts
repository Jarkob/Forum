import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GlobalsService } from '../shared/globals.service';
import { UserService } from './user.service';
import { User } from '../classes/user';

/**
 * service for authentication
 */
@Injectable()
export class AuthenticationService {

    /**
     * initialize service
     * @param http
     * @param globalsService for access to global variables
     * @param userService to access user data
     */
    constructor(
        private http: HttpClient,
        private globalsService: GlobalsService,
        private userService: UserService) { }

    /**
     * login user
     * @param email the email of the user to login
     * @param password the password of the user to login
     */
    public login(email: string, password: string): Observable<any> {
        return this.http.post<User>(this.globalsService.restUrl + '/login', {email: email, password: password})
        .pipe(
            tap(
                data => {this.setSession(data); }
            )
        );
    }

    /**
     * check if user is logged in
     */
    public isLoggedIn(): boolean {
        // check if token is valid
        return (sessionStorage.getItem('token') != null && sessionStorage.getItem('expires_at') != null)
            && (new Date() < new Date(JSON.parse(sessionStorage.getItem('expires_at'))));
    }

    /**
     * check if user is logged out
     */
    public isLoggedOut(): boolean {
        return !this.isLoggedIn();
    }

    /**
     * logout user
     */
    public logout(): void {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('expires_at');
        sessionStorage.removeItem('current_user');
    }

    /**
     * set the session
     * @param authResult result of authentication
     */
    private setSession(authResult: any) {
        const currentTime = new Date();
        const expiresAt = new Date(currentTime.getTime() + authResult.expiresIn * 1000);

        this.userService.getById(authResult.currentUser).subscribe(
            data => {
                sessionStorage.setItem('current_user', JSON.stringify(data));
            }
        );

        sessionStorage.setItem('token', authResult.token);
        sessionStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }
}
