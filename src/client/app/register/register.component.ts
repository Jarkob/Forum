import { UserService } from './../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../classes/user';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent {

    form: FormGroup;
    loading = false;

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }


    private register(): void {
        this.loading = true;
        // create new user in userservice, subscribe
        // if successful redirect to login page
        // else give error

        const value = this.form.value;
        const user = new User();
        user.username = value.username;
        user.email = value.email;
        user.password = value.password;

        if (user.username && user.email && user.password) {
            this.userService.create(user).subscribe(
                () => {
                    this.router.navigateByUrl('/login');
                }
            );
        }
    }
}
