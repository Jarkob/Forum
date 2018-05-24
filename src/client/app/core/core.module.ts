import { AuthenticationService } from './../services/authentication.service';
import { GlobalsService } from './../shared/globals.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [NavbarComponent, ToolbarComponent],
  exports: [RouterModule,
    NavbarComponent, ToolbarComponent],
  providers: [
    GlobalsService,
    // AuthenticationService
  ]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
