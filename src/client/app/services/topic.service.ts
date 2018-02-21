import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Topic } from '../classes/topic';

@Injectable()
export class TopicService {
    constructor(private http: HttpClient) {}

    public getTopics(): Observable<Topic[]> {
        // return this.http.get<Topic[]>('https://jsonplaceholder.typicode.com/users');
        return this.http.get<Topic[]>('http://193.22.74.140:50988/forum/topic');
    }

    public getTopic(id: number): Observable<Topic> {
        return this.http.get<Topic>('http://193.22.74.140:50988/forum/topic/'+ id);
    }

    public createTopic(topic: Topic): Observable<Topic> {
        // let body: string = JSON.stringify(topic);
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        // return this.http.post<Topic>('http://193.22.74.140:50988/forum/topic', topic);
        // const httpOptions = {
        //     headers: new HttpHeaders({
        //       'Content-Type':  'application/json',
        //       'Authorization': 'my-auth-token'
        //     })
        //   };
        return this.http.post<Topic>('http://193.22.74.140:50988/forum/topic', topic);
    }

    public createPost(post: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', {
            "userId": 1,
            "id": 1000,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia trum rerum est autem sunt rem eveniet architecto"
          }, httpOptions);
    }

    public updateTopic(topic: Topic): Observable<Topic> {
        return this.http.put<Topic>('http://193.22.74.140:50988/forum/topic/'+ topic.id, topic);
    }

    public deleteTopic(id: number): Observable<{}> {
        return this.http.delete('http://193.22.74.140:50988/forum/topic/'+ id);
    }
}
