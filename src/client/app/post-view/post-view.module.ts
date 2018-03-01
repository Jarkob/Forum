import {
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule
 } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostViewRoutingModule } from './post-view-routing.module';
import { PostViewComponent } from './post-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        PostViewRoutingModule,
        CommonModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        FormsModule,
        MatMenuModule
    ],
    declarations: [PostViewComponent],
    exports: [PostViewComponent]
})
export class PostViewModule { }
