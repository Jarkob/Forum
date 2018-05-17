import { AuthenticationService } from './../services/authentication.service';
import { LoginComponent } from './login.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        RouterModule,
        LoginRoutingModule,
        ReactiveFormsModule,
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
        AuthenticationService
    ]
})
export class LoginModule { }
