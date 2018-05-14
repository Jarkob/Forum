import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'register', component: RegisterComponent}
        ])
    ],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
