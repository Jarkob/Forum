import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Topic } from '../classes/topic';
import { GlobalsService } from './globals.service';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TopicService {
    constructor(
        private http: HttpClient,
        private globalsService: GlobalsService
    ) {}

    public getTopics(): Observable<Topic[]> {
        return this.http.get<Topic[]>(this.globalsService.restUrl + '/topics');
    }

    public getTopic(id: string): Observable<Topic> {
        return this.http.get<Topic>(this.globalsService.restUrl + '/topic/' + id);
    }

    public createTopic(topic: Topic): Observable<Topic> {
        topic.postCount = 0;
        topic.lastActivity = new Date();
        return this.http.post<Topic>(this.globalsService.restUrl + '/topics', topic, httpOptions);
    }

    public updateTopic(topic: Topic): Observable<Topic> {
        return this.http.put<Topic>(this.globalsService.restUrl + '/topics/' + topic._id, topic);
    }

    public deleteTopic(id: string): Observable<{}> {
        return this.http.delete(this.globalsService.restUrl + '/topics/' + id);
    }
}
