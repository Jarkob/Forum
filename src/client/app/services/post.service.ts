import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../classes/post';

const restIP = '193.22.75.158';

@Injectable()
export class PostService {
    constructor(private http: HttpClient) {}

    public getPosts(topicId: number): Observable<Post[]> {
        return this.http.get<Post[]>('http://' + restIP + ':50988/forum/posts/' + topicId);
    }

    public getPost(id: number): Observable<Post> {
        return this.http.get<Post>('http://' + restIP + ':50988/forum/post/' + id);
    }
}
