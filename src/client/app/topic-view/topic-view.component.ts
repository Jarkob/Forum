import { CommonModule } from '@angular/common';
import { PostService } from './../services/post.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from '../classes/topic';
import { TopicService } from '../services/topic.service';
import { Post } from '../classes/post';

@Component({
    moduleId: module.id,
    selector: 'sd-topic-view',
    templateUrl: 'topic-view.component.html',
    styleUrls: ['topic-view.component.css']
})
export class TopicViewComponent implements OnInit, OnDestroy {

    private id: string;
    private sub: any;

    private topic: Topic;
    private posts: Post[] = [];

    constructor(private route: ActivatedRoute, private _topicService: TopicService, private _postService: PostService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];

            this.getTopic();
            this.getPosts();
        });
    }


    getTopic() {
        this._topicService.getTopic(this.id).subscribe(
            data => {
                this.topic = data;
            }
        );
    }


    getPosts() {
        this._postService.getPosts(this.id).subscribe(
            data => {
                this.posts = data;
            }
        );
    }


    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    private createPost(title: string, text: string, username: string): void {
        const post: Post = new Post();
        post.title = title;
        post.text = text;
        post.username = username;
        post.topicId = this.topic._id;
        post.status = 'open';

        this._postService.createPost(post).subscribe(
            data => {
                this.getPosts();
            }
        );
    }
}
