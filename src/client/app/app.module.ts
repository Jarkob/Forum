import { TopicViewModule } from './topic-view/topic-view.module';
import { TopicService } from './services/topic.service';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { TopicOverviewModule } from './topic-overview/topic-overview.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { PostViewModule } from './post-view/post-view.module';

// import 'hammerjs';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TopicOverviewModule,
    TopicViewModule,
    PostViewModule,
    SharedModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>',
  },
    CommentService,
    PostService,
    TopicService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
