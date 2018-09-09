import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopicOverviewComponent } from './topic-overview/topic-overview.component';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { TopicViewComponent } from './topic-view/topic-view.component';
import { PostViewComponent } from './post-view/post-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
      { path: '', component: TopicOverviewComponent, canActivate: [AuthenticationGuardService] },
      { path: 'topic-overview', component: TopicOverviewComponent, canActivate: [AuthenticationGuardService] },
      { path: 'topic-view', component: TopicViewComponent, canActivate: [AuthenticationGuardService] },
      { path: 'topic-view/:id', component: TopicViewComponent, canActivate: [AuthenticationGuardService] },
      { path: 'post-view/:id', component: PostViewComponent, canActivate: [AuthenticationGuardService] },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'about', component: AboutComponent},
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

