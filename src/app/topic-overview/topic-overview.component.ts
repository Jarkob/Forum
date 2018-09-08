import { User } from './../classes/user';
import { MatDialog } from '@angular/material';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { TopicService } from './../services/topic.service';
import { Topic } from '../classes/topic';
import { CommentService } from '../services/comment.service';
import { PostService } from '../services/post.service';
import { ErrorDialogComponent } from '../error/error-dialog.component';

/**
 * an overview of all existing topics
 * TODO: refactoring
 */
@Component({
    selector: 'app-topic-overview',
    templateUrl: 'topic-overview.component.html',
    styleUrls: ['topic-overview.component.css']
})
export class TopicOverviewComponent implements OnInit, OnChanges {

    topics: Topic[] = [];

    public currentUser: User;

    editTopic = false;
    editId: string;

    /**
     * initialize component
     * @param topicService to access topic data from the backend
     */
    constructor(
        private topicService: TopicService,
        private postService: PostService,
        private commentService: CommentService,
        public dialog: MatDialog
    ) { }

    /**
     * on init the component should get an updated version of all topics
     */
    ngOnInit(): void {
        this.currentUser = JSON.parse(sessionStorage.getItem('current_user'));
        this.getTopics();
    }

    /**
     * update currentUser
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {
        this.currentUser = JSON.parse(sessionStorage.getItem('current_user'));
    }

    /**
     * subscribes to the topicService and gets all topics
     */
    private getTopics(): void {
        this.topicService.getTopics().subscribe(
            data => {
                this.topics = data;
                this.topics.sort((a, b) =>
                    a.lastActivity < b.lastActivity ?
                    1 : a.lastActivity > b.lastActivity ? -1 : 0);
            },
            err => {
                this.dialog.open(ErrorDialogComponent, {data: err});
            }
        );
    }

    /**
     * create a new topic
     * @param title the title of the new topic
     */
    createTopic(title: string): void {
        const topic: Topic = new Topic();
        topic._id = null;
        topic.title = title;

        this.topicService.createTopic(topic).subscribe(
            data => {
                this.getTopics();
            },
            err => {
                this.dialog.open(ErrorDialogComponent, {data: err});
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

            this.topicService.updateTopic(topic).subscribe(
                () => {},
                err => {
                    this.dialog.open(ErrorDialogComponent, {data: err});
                }
            );
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
            },
            err => {
                this.dialog.open(ErrorDialogComponent, {data: err});
            }
        );
    }
}
