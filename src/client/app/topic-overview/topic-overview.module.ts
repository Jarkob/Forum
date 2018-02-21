import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { TopicOverviewRoutingModule } from './topic-overview-routing.module';
import { NgModule } from '@angular/core';
import { TopicOverviewComponent } from './topic-overview.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        TopicOverviewRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [TopicOverviewComponent],
    exports: [TopicOverviewComponent]
})
export class TopicOverviewModule { }
