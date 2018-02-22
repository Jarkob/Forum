import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../classes/post';

const restIP = '193.22.75.158';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {
    constructor(private http: HttpClient) {}

    public getPosts(topicId: number): Observable<Post[]> {
        return this.http.get<Post[]>('http://' + restIP + ':50988/forum/posts/' + topicId);
    }


    public getPost(id: number): Observable<Post> {
        return this.http.get<Post>('http://' + restIP + ':50988/forum/post/' + id);
    }


    public createPost(post: Post): Observable<Post> {
        return this.http.post<Post>('http://' + restIP + ':50988/forum/posts', post, httpOptions);
    }


    public updatePost(post: Post): Observable<Post> {
        return this.http.put<Post>('http://' + restIP + ':50988/forum/posts', post);
    }


    public deletePost(id: number): Observable<{}> {
        return this.http.delete('http://' + restIP + ':50988/forum/posts/' + id);
    }
}
