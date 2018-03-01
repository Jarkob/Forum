import { GlobalsService } from './../shared/globals.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Topic } from '../classes/topic';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TopicService {
    constructor(private http: HttpClient, private _globalsService: GlobalsService) {}

    public getTopics(): Observable<Topic[]> {
        return this.http.get<Topic[]>(this._globalsService.restUrl + '/topic');
    }

    public getTopic(id: number): Observable<Topic> {
        return this.http.get<Topic>(this._globalsService.restUrl + '/topic/' + id);
    }


    public createTopic(topic: Topic): Observable<Topic> {
        return this.http.post<Topic>(this._globalsService.restUrl + '/topic', topic, httpOptions);
    }


    public updateTopic(topic: Topic): Observable<Topic> {
        return this.http.put<Topic>(this._globalsService.restUrl + '/topic/' + topic.id, topic);
    }


    public deleteTopic(id: number): Observable<{}> {
        return this.http.delete(this._globalsService.restUrl + '/topic/' + id);
    }
}
