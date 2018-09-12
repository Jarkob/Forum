import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';

import { User } from '../classes/user';
import { AuthenticationService } from '../services/authentication.service';
import { ErrorDialogComponent } from '../error/error-dialog.component';

@Component({
    selector: 'app-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnChanges {

    loggedIn: boolean;
    currentUser: User;

    constructor(
        private location: Location,
        private router: Router,
        public authenticationService: AuthenticationService,
        public dialog: MatDialog) {
        this.currentUser = JSON.parse(sessionStorage.getItem('current_user'));
    }

    ngOnInit(): void {
        this.router.events.subscribe(
            event => {
                this.loggedIn = !(this.location.path().endsWith('/login') || this.location.path().endsWith('/register'))
                    && this.authenticationService.isLoggedIn();
            },
            err => {
                this.dialog.open(ErrorDialogComponent, {data: err});
            }
        );
    }

    public navigateBack() {
        this.location.back();
    }

    public navigateForward() {
        this.location.forward();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.currentUser = JSON.parse(sessionStorage.getItem('current_user'));
        this.loggedIn = !(this.location.path().endsWith('/login') || this.location.path().endsWith('/register'))
            && this.authenticationService.isLoggedIn();
    }

    public logout() {
        this.authenticationService.logout();
        this.router.navigateByUrl('/login');
    }
}
