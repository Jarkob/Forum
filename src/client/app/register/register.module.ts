import { RegisterRoutingModule } from './register-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule } from '@angular/material';

import { RegisterComponent } from './register.component';
import { UserService } from './../services/user.service';

/**
 * contains everything for register
 */
@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        RouterModule,
        RegisterRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatIconModule
    ],
    declarations: [RegisterComponent],
    exports: [RegisterComponent],
    providers: [UserService]
})
export class RegisterModule { }
