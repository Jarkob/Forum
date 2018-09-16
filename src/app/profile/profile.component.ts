import { Component } from '@angular/core';

import { UserService } from './../services/user.service';
import { User } from '../classes/user';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent {

    currentUser: User;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(sessionStorage.getItem('current_user'));
    }
}
