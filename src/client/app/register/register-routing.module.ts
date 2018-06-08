import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';

/**
 * handles routing to the register view
 */
@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'register', component: RegisterComponent}
        ])
    ],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
