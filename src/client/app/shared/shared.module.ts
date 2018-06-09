import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';
import { UserService } from './../services/user.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GlobalsService } from './globals.service';
import { MaterialModule } from './material.module';
import { CommentService } from '../services/comment.service';
import { PostService } from '../services/post.service';
import { TopicService } from '../services/topic.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    ToolbarComponent,
  ],
  exports: [ToolbarComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        GlobalsService,
        CommentService,
        PostService,
        TopicService,
        UserService,
        AuthenticationService
      ]
    };
  }
}
