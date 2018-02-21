import { Comment } from './../classes/comment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {
    constructor(private http: HttpClient) {}

    public getComments(postId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>('http://193.22.74.140:50988/forum/comments/'+ postId);
    }

    public getComment(id: number): Observable<Comment> {
        return this.http.get<Comment>('http://193.22.74.140:50988/forum/comment/'+ id);
    }
}
