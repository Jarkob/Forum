import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GlobalsService } from './../shared/globals.service';
import { Post } from '../classes/post';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/**
 * simple crud service for posts
 */
@Injectable()
export class PostService {
    constructor(private http: HttpClient, private _globalsService: GlobalsService) { }

    public getPosts(topicId: string): Observable<Post[]> {
        return this.http.get<Post[]>(this._globalsService.restUrl + '/posts/' + topicId);
    }

    public getPost(id: string): Observable<Post> {
        return this.http.get<Post>(this._globalsService.restUrl + '/post/' + id);
    }

    public createPost(post: Post): Observable<Post> {
        // set time
        if (!post.postTime) {
            post.postTime = new Date();
        }

        // set username
        post.username = JSON.parse(sessionStorage.getItem('current_user')).username;

        return this.http.post<Post>(this._globalsService.restUrl + '/posts', post, httpOptions);
    }

    public updatePost(post: Post): Observable<Post> {
        return this.http.put<Post>(this._globalsService.restUrl + '/posts/' + post._id, post);
    }

    public deletePost(id: string): Observable<{}> {
        return this.http.delete(this._globalsService.restUrl + '/posts/' + id);
    }
}
