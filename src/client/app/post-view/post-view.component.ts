import { Comment } from './../classes/comment';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../classes/post';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'sd-post-view',
    templateUrl: 'post-view.component.html',
    styleUrls: ['post-view.component.css']
})
export class PostViewComponent implements OnInit, OnDestroy {

    private id: string;
    private sub: any;

    private editPost = false;

    private editComment = false;
    private editId: string;

    private post: Post;
    private comments: Comment[] = [];

    constructor(private router: Router,
        private route: ActivatedRoute,
        private _postService: PostService,
        private _commentService: CommentService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getPost();
    }


    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    private getPost() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];

            this._postService.getPost(this.id).subscribe(
                data => {
                    this.post = data;
                    this.getComments();
                }
            );
        });
    }


    private getComments() {
        this._commentService.getComments(this.post._id).subscribe(
            data => {
                this.comments = data;
            }
        );
    }


    private updatePost(): void {
        if (this.editPost) {
            this.editPost = false;
            this._postService.updatePost(this.post).subscribe();
        } else {
            this.editPost = true;
        }
    }


    private closePost(): void {
        this.post.status = 'closed';
        this._postService.updatePost(this.post).subscribe();
    }


    private deletePost() {
        this._postService.deletePost(this.post._id).subscribe();

        this.router.navigate(['/']);
    }


    private createComment(text: string): void {
        const comment: Comment = new Comment();
        comment.postId = this.post._id;
        comment.text = text;

        this._commentService.createComment(comment).subscribe(
            data => {
                this.getComments();
            }
        );
    }


    // TODO: refactor!!!
    private updateComment(id: string): void {
        if (this.editComment) {
            this.editComment = false;
            this.editId = null;

            let comment: Comment = new Comment();
            this.comments.forEach(element => {
                if (element._id === id) {
                    comment = element;
                }
            });

            this._commentService.updateComment(comment).subscribe();
        } else {
            this.editComment = true;
            this.editId = id;
        }
    }


    private deleteComment(id: string): void {
        this._commentService.deleteComment(id).subscribe();

        this.getComments();
    }
}
