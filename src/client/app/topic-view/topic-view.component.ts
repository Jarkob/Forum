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

    private id: number;
    private sub: any;

    private topic: Topic;
    private posts: Post[] = [];

    constructor(private route: ActivatedRoute, private _topicService: TopicService, private _postService: PostService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

            this.getTopic();
        });

        this.getPosts();

        // without backend mock data
        // this.topic = {
        //     id: 1,
        //     title: 'Hausaufgaben'
        // };

        // this.posts = [
        //     {
        //         id: 1,
        //         title: 'Verzweiflung',
        //         text: 'Ich weiß nicht mehr weiter, ich bin so verzweifelt.',
        //         status: 'open',
        //         postTime: '11.11.2011',
        //         username: 'Max Mustermann'
        //     },
        //     {
        //         id: 2,
        //         title: 'Noch nicht viel los hier',
        //         text: 'Ist ja noch nicht viel los hier ihr Affen, macht mal Kapelle!',
        //         status: 'open',
        //         postTime: '22.22.2022',
        //         username: 'Must Maxermann'
        //     },
        //     {
        //         id: 3,
        //         title: 'Frage zu Aufgabe 3',
        //         text: 'Wieso sollen wir Aufgabe 3 machen?',
        //         status: 'open',
        //         postTime: '31.03.2009',
        //         username: 'Diogenes'
        //     }
        // ];
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
        post.topicId = this.topic.id;

        this._postService.createPost(post).subscribe(
            data => {
                this.getPosts();
            }
        );

        // this.posts.push(post);
        // this.getPosts();
    }
}
