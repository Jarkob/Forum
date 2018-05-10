import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(private router: Router) { }

    private register(): void {
        this.loading = true;
        // create new user in userservice, subscribe
        // if successful redirect to login page
        // else give error
    }
}
