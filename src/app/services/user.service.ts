import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalsService } from './globals.service';

import { User } from '../classes/user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/**
 * simple crud service for users
 */
@Injectable()
export class UserService {

    constructor(
        private http: HttpClient,
        private globalsService: GlobalsService) { }

    public getAll(): Observable<Array<User>> {
        return this.http.get<User[]>(this.globalsService.restUrl + '/users');
    }

    public getById(id: string): Observable<User> {
        return this.http.get<User>(this.globalsService.restUrl + '/user/' + id);
    }

    public create(user: User) {
        return this.http.post(this.globalsService.restUrl + '/users', user, httpOptions);
    }

    public update(user: User) {
        return this.http.put(this.globalsService.restUrl + '/users/' + user._id, user);
    }

    public delete(id: string) {
        return this.http.delete(this.globalsService.restUrl + '/users/' + id);
    }
}
