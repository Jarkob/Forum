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

    private editTopic = false;
    private editId: number;

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
                this.topics = data;
            }
        );
    }


    private createTopic(title: string): void {
        const topic: Topic = new Topic();
        topic.title = title;

        this._topicService.createTopic(topic).subscribe(
            data => {
                this.getTopics();
            }
        );
    }


    private updateTopic(topicId: number): void {
        if (this.editTopic) {
            this.editTopic = false;
            this.editId = null;

            let topic: Topic = new Topic();
            this.topics.forEach(element => {
                if (element.id === topicId) {
                    topic = element;
                }
            });

            this._topicService.updateTopic(topic).subscribe();
        } else {
            this.editTopic = true;
            this.editId = topicId;
        }
    }

    private deleteTopic(id: number): void {
        this.editId = id;
        this.editTopic = true;

        this._topicService.deleteTopic(id).subscribe(
            data => {
                this.getTopics();
            }
        );
    }
}
