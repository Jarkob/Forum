import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../shared/globals.service';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private globalsService: GlobalsService
    ) { }

    public login(email: string, password: string): Observable<any> {
        return this.http.post<User>(this.globalsService.restUrl + '/login', {email: email, password: password})
            .pipe(
                tap(data => this.setSession)
            );
    }


    public isLoggedIn(): boolean {
        // check if token is valid
        return new Date() < new Date(JSON.parse(sessionStorage.getItem('expires_at')));
    }

    public isLoggedOut(): boolean {
        return !this.isLoggedIn();
    }

    public logout(): void {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('expires_at');
    }

    private setSession(authResult: any) {
        const currentTime = new Date();
        const expiresAt = new Date(currentTime.getTime() + authResult.expiresIn * 1000);

        sessionStorage.setItem('token', authResult.token);
        sessionStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }
}
