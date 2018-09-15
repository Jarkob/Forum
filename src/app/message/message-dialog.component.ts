import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    templateUrl: 'message-dialog.component.html',
    styleUrls: ['message-dialog.component.css']
})
export class MessageDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<MessageDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string) {
        this.message = data;
    }

    message: string;

    onOkClick(): void {
        this.dialogRef.close();
    }
}
