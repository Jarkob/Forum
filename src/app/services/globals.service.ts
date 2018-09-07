import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class GlobalsService {

    restUrl: any;

    constructor() {
        this.restUrl = isDevMode() ? 'http://localhost:8080/api' : 'https://forum-backend.herokuapp.com/api';
    }
}
