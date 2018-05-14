import { RegisterRoutingModule } from './register-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        RouterModule,
        RegisterRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule
    ],
    declarations: [
        RegisterComponent
    ],
    exports: [
        RegisterComponent
    ],
    providers: [
        // UserService
    ]
})
export class RegisterModule { }