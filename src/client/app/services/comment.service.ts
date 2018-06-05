import { GlobalsService } from './../shared/globals.service';
import { Comment } from './../classes/comment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CommentService {
    constructor(private http: HttpClient, private _globalsService: GlobalsService) {}

    public getComments(postId: string): Observable<Comment[]> {
        return this.http.get<Comment[]>(this._globalsService.restUrl + '/comments/' + postId);
    }


    public createComment(comment: Comment): Observable<Comment> {
        // set time
        if (!comment.commentTime) {
            comment.commentTime = new Date();
        }

        // set username
        comment.username = JSON.parse(sessionStorage.getItem('current_user')).username;

        return this.http.post<Comment>(this._globalsService.restUrl + '/comments', comment, httpOptions);
    }


    public updateComment(comment: Comment): Observable<Comment> {
        return this.http.put<Comment>(this._globalsService.restUrl + '/comments/' + comment._id, comment);
    }


    public deleteComment(id: string): Observable<{}> {
        return this.http.delete(this._globalsService.restUrl + '/comments/' + id);
    }
}
