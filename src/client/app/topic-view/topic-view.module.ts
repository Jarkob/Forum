import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule } from '@angular/material';

import { TopicViewRoutingModule } from './topic-view-routing.module';
import { TopicViewComponent } from './topic-view.component';
import { PostViewModule } from '../post-view/post-view.module';

/**
 * contains everything to display the topic view
 */
@NgModule({
    imports: [
        TopicViewRoutingModule,
        PostViewModule,
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        FormsModule
    ],
    declarations: [TopicViewComponent],
    exports: [TopicViewComponent]
})
export class TopicViewModule { }
