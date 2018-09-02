import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    templateUrl: 'error-dialog.component.html',
    styleUrls: ['error-dialog.component.css']
})
export class ErrorDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<ErrorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: HttpErrorResponse) {
        this.errorMessage = data;
    }

    errorMessage: HttpErrorResponse;

    onOkClick(): void {
        this.dialogRef.close();
    }
}
