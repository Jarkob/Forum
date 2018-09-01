import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    templateUrl: 'error-dialog.component.html',
    styleUrls: ['error-dialog.component.css']
})
export class ErrorDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: string) {
        this.errorMessage = data;
    }

    errorMessage: string;
}
