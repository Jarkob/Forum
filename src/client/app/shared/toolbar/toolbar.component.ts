import { Component } from '@angular/core';
import { Location } from '@angular/common';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private location: Location) { }

    public navigateBack() {
      this.location.back();
    }
}

