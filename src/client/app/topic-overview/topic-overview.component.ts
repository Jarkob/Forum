import { Component, OnInit } from '@angular/core';

import { TopicService } from './../services/topic.service';
import { Topic } from '../classes/topic';
import { CommentService } from '../services/comment.service';
import { PostService } from '../services/post.service';

/**
 * an overview of all existing topics
 * TODO: refactoring
 */
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

    /**
     * initialize component
     * @param topicService to access topic data from the backend
     */
    constructor(
        private topicService: TopicService,
        private postService: PostService,
        private commentService: CommentService
    ) { }

    /**
     * on init the component should get an updated version of all topics
     */
    ngOnInit(): void {
        this.getTopics();
    }

    /**
     * subscribes to the topicService and gets all topics
     */
    private getTopics(): void {
        this.topicService.getTopics().subscribe(
            data => {
                this.topics = data;
            }
        );
    }

    /**
     * create a new topic
     * @param title the title of the new topic
     */
    private createTopic(title: string): void {
        const topic: Topic = new Topic();
        topic._id = null;
        topic.title = title;

        this.topicService.createTopic(topic).subscribe(
            data => {
                this.getTopics();
            }
        );
    }

    /**
     * if the topic is selected for editing it is updated
     * else it is selected for editing
     * @param topicId the id of the topic to be updated
     */
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

            this.topicService.updateTopic(topic).subscribe();
        } else {
            this.editTopic = true;
            this.editId = topicId;
        }
    }

    /**
     * delete a topic
     * @param id the id of the topic to be deleted
     */
    private deleteTopic(id: string): void {
        this.editId = id;
        this.editTopic = true;

        this.topicService.deleteTopic(id).subscribe(
            data => {
                this.getTopics();
            }
        );
    }
}
