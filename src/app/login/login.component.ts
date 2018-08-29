import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';

/**
 * shows a login screen
 * TODO: refactor
 */
@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    loading = false;
    returnUrl: string;

    /**
     * initialize component
     * @param fb formbuilder instance
     * @param route the activated route
     * @param router the router to navigate away
     * @param authenticationService to authenticate the user
     */
    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    /**
     * set return url
     * TODO
     */
    ngOnInit(): void {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    /**
     * login user
     */
    private login(): void {
        this.loading = true;
        const val = this.form.value;

        if (val.email && val.password) {
            this.authenticationService.login(val.email, val.password)
                .subscribe(
                    () => {
                        console.log('User is logged in');

                        this.router.navigateByUrl(this.returnUrl);
                    },
                    err => {
                        console.log('Error: ', err);
                    }
                );
        }
    }
}
