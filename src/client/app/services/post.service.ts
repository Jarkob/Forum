import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { GlobalsService } from './../shared/globals.service';
import { Post } from '../classes/post';
import { Topic } from '../classes/topic';
import { TopicService } from './topic.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/**
 * simple crud service for posts
 */
@Injectable()
export class PostService {
    constructor(
        private http: HttpClient,
        private globalsService: GlobalsService,
        private topicService: TopicService
    ) { }

    public getPosts(topicId: string): Observable<Post[]> {
        return this.http.get<Post[]>(this.globalsService.restUrl + '/posts/' + topicId);
    }

    public getPost(id: string): Observable<Post> {
        return this.http.get<Post>(this.globalsService.restUrl + '/post/' + id);
    }

    public createPost(post: Post): Observable<Post> {
        // set time
        if (!post.postTime) {
            post.postTime = new Date();
        }

        // set username
        post.username = JSON.parse(sessionStorage.getItem('current_user')).username;

        return this.http.post<Post>(this.globalsService.restUrl + '/posts', post, httpOptions)
        .pipe(
            tap(
                data => {
                    // change topic
                    this.topicService.getTopic(post.topicId).subscribe(
                        topicData => {
                            const updatedTopic: Topic = topicData;
                            updatedTopic.postCount++;
                            updatedTopic.lastActivity = data.postTime;
                            updatedTopic.lastPostId = data._id;
                            this.topicService.updateTopic(updatedTopic).subscribe();
                        },
                        err => {
                            console.log(err);
                        }
                    );
                }
            )
        );
    }

    public updatePost(post: Post): Observable<Post> {
        return this.http.put<Post>(this.globalsService.restUrl + '/posts/' + post._id, post);
    }

    public deletePost(post: Post): Observable<{}> {
        return this.http.delete(this.globalsService.restUrl + '/posts/' + post._id).pipe(
            tap(
                data => {
                    // change topic
                    this.topicService.getTopic(post.topicId).subscribe(
                        topicData => {
                            const updatedTopic: Topic = topicData;
                            updatedTopic.postCount--;
                            // lastActivity and lastPostId won't be updated here
                            this.topicService.updateTopic(updatedTopic).subscribe();
                        }
                    );
                }
            )
        );
    }
}
