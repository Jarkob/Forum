import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './../services/user.service';
import { User } from '../classes/user';
import { ErrorDialogComponent } from '../error/error-dialog.component';

/**
 * shows a register page
 * TODO: refactor
 */
@Component({
    // moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent {

    form: FormGroup;
    loading = false;

    /**
     * initialize component
     * @param formBuilder formbuilder instance
     * @param activatedRoute the activated route
     * @param router the router to navigate
     * @param userService to access user data
     */
    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        public dialog: MatDialog
    ) {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    /**
     * create new user
     */
    private register(): void {
        this.loading = true;

        const value = this.form.value;
        const user = new User();
        user.username = value.username;
        user.email = value.email;
        user.password = value.password;

        if (user.username && user.email && user.password) {
            console.log('attempt to create user');
            this.userService.create(user).subscribe(
                () => {
                    console.log('user was created');
                    this.router.navigateByUrl('/login');
                },
                err => {
                    console.log('Error: ', err);
                    this.dialog.open(ErrorDialogComponent, {data: err});
                }
            );
        }
    }
}
