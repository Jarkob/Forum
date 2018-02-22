import { Comment } from './../classes/comment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const restIP = '193.22.75.158';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CommentService {
    constructor(private http: HttpClient) {}

    public getComments(postId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>('http://' + restIP + ':50988/forum/comment/' + postId);
    }


    public createComment(comment: Comment): Observable<Comment> {
        return this.http.post<Comment>('http://' + restIP + ':50988/forum/comment', comment, httpOptions);
    }


    public updateComment(comment: Comment): Observable<Comment> {
        return this.http.put<Comment>('http://' + restIP + ':50988/forum/comment', comment);
    }


    public deleteComment(id: number): Observable<{}> {
        return this.http.delete('http://' + restIP + ':50988/forum/comment/' + id);
    }
}
