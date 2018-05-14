import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalsService } from '../../../../dist/tmp/app/shared/globals.service';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private globalsService: GlobalsService
    ) { }

    // public login(email: string, password: string): Observable<any> {
    //     return this.http.post<any>(this.globalsService.restUrl + '/authenticate',{email: email, password: password}).map(
    //         user => {
    //             // login successful, if there's a token in the response
    //             if (user && user.token) {
    //                 // store user details and jwt token in session storage
    //                 // to keep user logged in between page refreshes
    //                 sessionStorage.setItem('currentUser', JSON.stringify(user));
    //             }
    //             return user;
    //         }
    //     );
    // }

    // public isLoggedIn(): boolean {
        //
    // }

    public logout(): void {
        // remove user from session storage to log user out
        sessionStorage.removeItem('currentUser');
    }
}
