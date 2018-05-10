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
    private editId: string;

    constructor(private _topicService: TopicService) { }

    ngOnInit(): void {
        this.getTopics();
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
        topic._id = null;
        topic.title = title;

        this._topicService.createTopic(topic).subscribe(
            data => {
                this.getTopics();
            }
        );
    }


    private updateTopic(topicId: string): void {
        if (this.editTopic) {
            this.editTopic = false;
            this.editId = null;

            let topic: Topic = new Topic();
            this.topics.forEach(element => {
                if (element._id === topicId) {
                    topic = element;
                }
            });

            this._topicService.updateTopic(topic).subscribe();
        } else {
            this.editTopic = true;
            this.editId = topicId;
        }
    }

    private deleteTopic(id: string): void {
        this.editId = id;
        this.editTopic = true;

        this._topicService.deleteTopic(id).subscribe(
            data => {
                this.getTopics();
            }
        );
    }
}
