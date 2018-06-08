import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

/**
 * handles routing to the login view
 */
@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'login', component: LoginComponent}
        ])
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
