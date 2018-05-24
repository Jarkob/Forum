// import { User } from './../../classes/user';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
// import { Location } from '@angular/common';
// import { AuthenticationService } from '../../services/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'sd-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnChanges {

    // private isLoggedIn: boolean;
    // private currentUser: User;

    // constructor(private location: Location, private authenticationService: AuthenticationService) {
    //     this.isLoggedIn = this.authenticationService.isLoggedIn();
    //     this.currentUser = JSON.parse(sessionStorage.getItem('current_user'));
    // }

    // public navigateBack() {
    //     this.location.back();
    // }

    // public navigateForward() {
    //     this.location.forward();
    // }

    ngOnChanges(changes: SimpleChanges): void {
    //     this.isLoggedIn = this.authenticationService.isLoggedIn();
    //     this.currentUser = JSON.parse(sessionStorage.getItem('current_user'));
    }

    // public logout() {
    //     this.authenticationService.logout();
    //     console.log('logged out');
    // }
}
