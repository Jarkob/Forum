import { LoginComponent } from './login.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        RouterModule,
        LoginRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCardModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
    providers: [
        // authenticationService
    ]
})
export class LoginModule { }
