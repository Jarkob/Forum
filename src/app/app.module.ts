import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PostViewComponent } from './post-view/post-view.component';
import { TopicViewComponent } from './topic-view/topic-view.component';
import { GlobalsService } from './services/globals.service';
import { CommentService } from './services/comment.service';
import { PostService } from './services/post.service';
import { TopicService } from './services/topic.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { TopicOverviewComponent } from './topic-overview/topic-overview.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './services/authentication.interceptor';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TopicOverviewComponent,
    TopicViewComponent,
    PostViewComponent,
    ImpressumComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    GlobalsService,
    AuthenticationGuardService,
    AuthenticationService,
    UserService,
    TopicService,
    PostService,
    CommentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
