import { MatDialog, PageEvent } from '@angular/material';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Topic } from '../classes/topic';
import { TopicService } from '../services/topic.service';
import { Post } from '../classes/post';
import { PostService } from './../services/post.service';
import { ErrorDialogComponent } from '../error/error-dialog.component';

/**
 * an overview of a single existing topic showing all posts
 * TODO: refactoring
 */
@Component({
    selector: 'app-topic-view',
    templateUrl: 'topic-view.component.html',
    styleUrls: ['topic-view.component.css']
})
export class TopicViewComponent implements OnInit, OnDestroy {

    id: string;
    private sub: any;

    topic: Topic;
    posts: Post[] = [];

    // for pagination
    shownPosts: Post[];
    pageIndex = 0;
    pageSize = 10;

    /**
     * initialize component
     * @param route the active route for access to the topicId in the url
     * @param topicService to access topic data
     * @param postService to access post data
     */
    constructor(
        private route: ActivatedRoute,
        private topicService: TopicService,
        private postService: PostService,
        public dialog: MatDialog
    ) { }

    /**
     * on init the component should get the fitting topic and all contained posts
     */
    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];

            this.getTopic();
            this.getPosts();
        });
    }

    /**
     * on destroy the subscription to the route should end
     */
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    /**
     * update pagination
     * @param event
     */
    changePage(event: PageEvent): void {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        const from = this.pageIndex * this.pageSize;
        const to = from + this.pageSize;
        this.shownPosts = this.posts.slice(from, to);
    }

    /**
     * get the topic
     */
    private getTopic(): void {
        this.topicService.getTopic(this.id).subscribe(
            data => {
                this.topic = data;
            },
            err => {
                this.dialog.open(ErrorDialogComponent, {data: err});
            }
        );
    }

    /**
     * get the posts
     */
    private getPosts() {
        this.postService.getPosts(this.id).subscribe(
            data => {
                this.posts = data;

                // update pagination
                const from = this.pageIndex * this.pageSize;
                const to = from + this.pageSize;
                this.shownPosts = this.posts.slice(from, to);
            },
            err => {
                this.dialog.open(ErrorDialogComponent, {data: err});
            }
        );
    }

    /**
     * create a new post
     * @param title the title of the new post
     * @param text the text of the new post
     */
    createPost(title: string, text: string): void {
        const post: Post = new Post();
        post.title = title;
        post.text = text;
        post.topicId = this.topic._id;
        post.status = 'open';

        this.postService.createPost(post).subscribe(
            data => {
                this.getPosts();
            },
            err => {
                this.dialog.open(ErrorDialogComponent, {data: err});
            }
        );
    }
}
