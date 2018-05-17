import { Observable } from 'rxjs/Observable';
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

    // TODO
    public login(email: string, password: string): Observable<any> {
        return this.http.post<User>(this.globalsService.restUrl + '/authenticate', {email: email, password: password});
    }

    // TODO
    public isAuthenticated(): boolean {
        // check if token is valid
        return false;
    }

    public logout(): void {
        // remove user from session storage to log user out
        sessionStorage.removeItem('currentUser');
    }
}
