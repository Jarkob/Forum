import { TopicService } from './../services/topic.service';
import { Comment } from './../classes/comment';
import { Component, OnInit } from '@angular/core';
import { Topic } from '../classes/topic';

@Component({
    moduleId: module.id,
    selector: 'sd-topic-overview',
    templateUrl: 'topic-overview.component.html',
    styleUrls: ['topic-overview.component.css']
})
export class TopicOverviewComponent implements OnInit {

    private topics: Topic[] = [];

    constructor(private _topicService: TopicService) { }

    ngOnInit(): void {
        this.getTopics();

        // without backend mock data
        // this.topics = [
        //     {
        //         id: 1,
        //         title: 'Hausaufgaben'
        //     },
        //     {
        //         id: 2,
        //         title: 'Klausuren'
        //     },
        //     {
        //         id: 3,
        //         title: 'Fahrgemeinschaften'
        //     },
        //     {
        //         id: 4,
        //         title: 'Klatsch und Tratsch'
        //     },
        //     {
        //         id: 5,
        //         title: 'Sport'
        //     }
        // ];
    }


    private getTopics() {
        this._topicService.getTopics().subscribe(
            data => {
                console.log(data);
                this.topics = data;
            }
        );
    }


    private createTopic(title: string): void {
        const topic: Topic = new Topic();
        topic.title = title;

        this._topicService.createTopic(topic).subscribe(
            data => this.topics.push(data)
        );

        this.topics.push(topic);
    }


    private updateTopic(topicId: number, newTitle: string): void {
        // this.topics.find()
        let topic: Topic = new Topic();
        this.topics.forEach(element => {
            if (element.id === topicId) {
                topic = element;
            }
        });

        topic.title = newTitle;

        this._topicService.updateTopic(topic).subscribe(
            data => console.log('updated data: ' + data)
        );
    }

    private deleteTopic(id: number): void {
        this._topicService.deleteTopic(id).subscribe();

        this.getTopics();
    }
}
