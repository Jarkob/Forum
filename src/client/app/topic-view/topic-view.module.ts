import { CommonModule } from '@angular/common';
import { TopicViewRoutingModule } from './topic-view-routing.module';
import { NgModule } from '@angular/core';
import { TopicViewComponent } from './topic-view.component';
import { PostViewModule } from '../post-view/post-view.module';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        TopicViewRoutingModule,
        PostViewModule,
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    declarations: [TopicViewComponent],
    exports: [TopicViewComponent]
})
export class TopicViewModule { }
