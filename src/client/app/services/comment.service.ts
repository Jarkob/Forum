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

    public getComments(postId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(this._globalsService.restUrl + '/comment/' + postId);
    }


    public createComment(comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(this._globalsService.restUrl + '/comment', comment, httpOptions);
    }


    public updateComment(comment: Comment): Observable<Comment> {
        return this.http.put<Comment>(this._globalsService.restUrl + '/comment', comment);
    }


    public deleteComment(id: number): Observable<{}> {
        return this.http.delete(this._globalsService.restUrl + '/comment/' + id);
    }
}
