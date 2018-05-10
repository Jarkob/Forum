import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TopicOverviewComponent } from './topic-overview.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: TopicOverviewComponent },
            {path: 'topic-overview', component: TopicOverviewComponent}
        ])
    ],
    exports: [RouterModule]
})
export class TopicOverviewRoutingModule { }
