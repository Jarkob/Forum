import { NgModule } from '@angular/core';
import { TopicViewComponent } from './topic-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'topic-view', component: TopicViewComponent},
            {path: 'topic-view/:id', component: TopicViewComponent}
        ])
    ],
    exports: [RouterModule]
})
export class TopicViewRoutingModule { }
