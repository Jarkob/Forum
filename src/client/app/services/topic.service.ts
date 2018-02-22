import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Topic } from '../classes/topic';

const restIP = '193.22.75.158';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TopicService {
    constructor(private http: HttpClient) {}

    public getTopics(): Observable<Topic[]> {
        return this.http.get<Topic[]>('http://' + restIP + ':50988/forum/topic');
    }

    public getTopic(id: number): Observable<Topic> {
        return this.http.get<Topic>('http://' + restIP + ':50988/forum/topic/' + id);
    }


    public createTopic(topic: Topic): Observable<Topic> {
        return this.http.post<Topic>('http://' + restIP + ':50988/forum/topic', topic, httpOptions);
    }


    public updateTopic(topic: Topic): Observable<Topic> {
        return this.http.put<Topic>('http://' + restIP + ':50988/forum/topic/' + topic.id, topic);
    }


    public deleteTopic(id: number): Observable<{}> {
        return this.http.delete('http://' + restIP + ':50988/forum/topic/' + id);
    }
}
