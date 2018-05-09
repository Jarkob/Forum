import { GlobalsService } from './../shared/globals.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../classes/post';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {
    constructor(private http: HttpClient, private _globalsService: GlobalsService) {}

    public getPosts(topicId: number): Observable<Post[]> {
        return this.http.get<Post[]>(this._globalsService.restUrl + '/posts/' + topicId);
    }


    public getPost(id: number): Observable<Post> {
        return this.http.get<Post>(this._globalsService.restUrl + '/post/' + id);
    }


    public createPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this._globalsService.restUrl + '/posts', post, httpOptions);
    }


    public updatePost(post: Post): Observable<Post> {
        return this.http.put<Post>(this._globalsService.restUrl + '/posts/' + post.id, post);
    }


    public deletePost(id: number): Observable<{}> {
        return this.http.delete(this._globalsService.restUrl + '/posts/' + id);
    }
}
