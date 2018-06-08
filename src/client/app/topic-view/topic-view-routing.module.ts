import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopicViewComponent } from './topic-view.component';

/**
 * handles routing to the topic view
 */
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
