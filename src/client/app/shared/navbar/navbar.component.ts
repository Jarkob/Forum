import { Component } from '@angular/core';
import { Location } from '@angular/common';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {

    constructor(private location: Location) { }

    public navigateBack() {
      this.location.back();
    }
}

