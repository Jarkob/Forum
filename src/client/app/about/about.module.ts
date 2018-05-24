import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AboutRoutingModule,
    // MatToolbarModule
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
