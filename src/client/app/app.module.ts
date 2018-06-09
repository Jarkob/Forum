import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthenticationInterceptor } from './services/authentication.interceptor';
import { TopicOverviewComponent } from './topic-overview/topic-overview.component';
import { LoginComponent } from './login/login.component';
import { PostViewComponent } from './post-view/post-view.component';
import { TopicViewComponent } from './topic-view/topic-view.component';
import { RegisterComponent } from './register/register.component';
import { ImpressumComponent } from './impressum/impressum.component';

// import 'hammerjs';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,
    PostViewComponent,
    TopicOverviewComponent,
    TopicViewComponent,
    LoginComponent,
    RegisterComponent,
    ImpressumComponent
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>',
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
