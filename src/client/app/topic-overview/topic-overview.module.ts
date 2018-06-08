import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';

import { TopicOverviewRoutingModule } from './topic-overview-routing.module';
import { TopicOverviewComponent } from './topic-overview.component';

/**
 * contains everything to display the topic overview
 */
@NgModule({
    imports: [
        CommonModule,
        TopicOverviewRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
    ],
    declarations: [TopicOverviewComponent],
    exports: [TopicOverviewComponent]
})
export class TopicOverviewModule { }
