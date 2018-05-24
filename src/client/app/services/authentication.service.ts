import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../shared/globals.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private globalsService: GlobalsService,
        private userService: UserService
    ) { }


    public login(email: string, password: string): Observable<any> {
        return this.http.post<User>(this.globalsService.restUrl + '/login', {email: email, password: password})
            .pipe(
                tap(data => {
                    this.setSession(data);
                })
            );
    }


    public isLoggedIn(): boolean {
        // check if token is valid
        return (sessionStorage.getItem('token') != null && sessionStorage.getItem('expires_at') != null)
            && (new Date() < new Date(JSON.parse(sessionStorage.getItem('expires_at'))));
    }

    public isLoggedOut(): boolean {
        return !this.isLoggedIn();
    }

    public logout(): void {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('expires_at');
        sessionStorage.removeItem('current_user');
    }

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
