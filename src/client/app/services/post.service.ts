import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../classes/post';

@Injectable()
export class PostService {
    constructor(private http: HttpClient) {}

    public getPosts(topicId: number): Observable<Post[]> {
        return this.http.get<Post[]>('http://193.22.74.140:50988/forum/posts/'+ topicId);
    }

    public getPost(id: number): Observable<Post> {
        return this.http.get<Post>('http://193.22.74.140:50988/forum/post/'+ id);
    }
}