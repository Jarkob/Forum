import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    loading = false;
    returnUrl: string;

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

    ngOnInit(): void {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    private login(): void {
        this.loading = true;
        const val = this.form.value;

        if (val.email && val.password) {
            // debug
            console.log('attempting login');
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
