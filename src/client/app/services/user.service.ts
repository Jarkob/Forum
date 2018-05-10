import { GlobalsService } from './../../../../dist/tmp/app/shared/globals.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable()
export class UserService {
    constructor(
        private http: HttpClient,
        private globalsService: GlobalsService
    ) { }

    public getAll(): Observable<Array<User>> {
        return this.http.get<User[]>(this.globalsService.restUrl + '/users');
    }

    public getById(id: string): Observable<User> {
        return this.http.get<User>(this.globalsService.restUrl + '/users/' + id);
    }

    public create(user: User) {
        return this.http.post(this.globalsService.restUrl + '/users', user);
    }

    public update(user: User) {
        return this.http.put(this.globalsService.restUrl + '/users/' + user._id, user);
    }

    public delete(id: string) {
        return this.http.delete(this.globalsService.restUrl + '/users/' + id);
    }
}
