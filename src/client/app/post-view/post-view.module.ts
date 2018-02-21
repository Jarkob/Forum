import { MatCardModule, MatDividerModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostViewRoutingModule } from './post-view-routing.module';
import { PostViewComponent } from './post-view.component';

@NgModule({
    imports: [
        PostViewRoutingModule,
        CommonModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [PostViewComponent],
    exports: [PostViewComponent]
})
export class PostViewModule { }
