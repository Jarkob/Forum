import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TopicService } from './../services/topic.service';
import { Post } from '../classes/post';
import { Comment } from './../classes/comment';
import { CommentService } from '../services/comment.service';
import { PostService } from '../services/post.service';
import { Topic } from '../classes/topic';

/**
 * a view a single post showing all belonging comments
 * TODO: refactoring
 */
@Component({
    selector: 'app-post-view',
    templateUrl: 'post-view.component.html',
    styleUrls: ['post-view.component.css']
})
export class PostViewComponent implements OnInit, OnDestroy {

    private id: string;
    private sub: any;

    private editPost = false;

    private editComment = false;
    private editId: string;

    private topic: Topic;
    private post: Post;
    private comments: Comment[] = [];

    /**
     * initialize component
     * @param router for navigationg
     * @param route the active route for access to the postId in the url
     * @param topicService to access topic data
     * @param postService to access post data
     * @param commentService to access comment data
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private topicService: TopicService,
        private postService: PostService,
        private commentService: CommentService) { }

    /**
     * on init the post should be loaded
     */
    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                this.id = params['id'];
                this.getPost();
            }
        );
    }

    /**
     * on destroy the subscription to the route should end
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    /**
     * get the topic
     */
    private getTopic(): void {
        this.topicService.getTopic(this.post.topicId).subscribe(
            data => {
                this.topic = data;
            }
        );
    }

    /**
     * get the post
     */
    private getPost(): void {
        this.postService.getPost(this.id).subscribe(
            data => {
                this.post = data;
                this.getTopic();
                this.getComments();
            }
        );
    }

    /**
     * get the comments
     */
    private getComments(): void {
        this.commentService.getComments(this.post._id).subscribe(
            data => {
                this.comments = data;
            }
        );
    }

    /**
     * if the post is selected for editing update it
     * else select it for editing
     */
    private updatePost(): void {
        if (this.editPost) {
            this.editPost = false;
            this.postService.updatePost(this.post).subscribe();
        } else {
            this.editPost = true;
        }
    }

    /**
     * change the status of the post to closed
     */
    private closePost(): void {
        this.post.status = 'closed';
        this.postService.updatePost(this.post).subscribe();
    }

    /**
     * delete the post
     */
    private deletePost() {
        this.postService.deletePost(this.post).subscribe();

        this.router.navigate(['/']);
    }

    /**
     * create a new comment to the post
     * @param text the text of the new comment
     */
    private createComment(text: string): void {
        const comment: Comment = new Comment();
        comment.postId = this.post._id;
        comment.text = text;

        this.commentService.createComment(comment).subscribe(
            data => {
                this.getComments();
            }
        );
    }

    /**
     * update a comment
     * @param id the id of the comment to update
     */
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

            this.commentService.updateComment(comment).subscribe();
        } else {
            this.editComment = true;
            this.editId = id;
        }
    }

    /**
     * delete a comment
     * @param id the id of the comment to be deleted
     */
    private deleteComment(id: string): void {
        this.commentService.deleteComment(id).subscribe();

        this.getComments();
    }
}
