import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostViewComponent } from './post-view.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'post-view/:id', component: PostViewComponent}
        ])
    ],
    exports: [RouterModule]
})
export class PostViewRoutingModule { }
