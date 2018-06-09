import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from './../../classes/user';

@Component({
    moduleId: module.id,
    selector: 'sd-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnChanges {

    private loggedIn: boolean;
    private currentUser: User;

    constructor(
        private location: Location,
        private router: Router,
        public authenticationService: AuthenticationService) {
        this.currentUser = JSON.parse(sessionStorage.getItem('current_user'));
    }

    ngOnInit(): void {
        this.router.events.subscribe(
            event => {
                this.loggedIn = !(this.location.path().endsWith('/login') || this.location.path().endsWith('/register'));
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
        this.loggedIn = !(this.location.path().endsWith('/login') || this.location.path().endsWith('/register'));
    }

    public logout() {
        this.authenticationService.logout();
        this.router.navigateByUrl('/login');
    }
}
