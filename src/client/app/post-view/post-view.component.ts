import { CommonModule } from '@angular/common';
import { Comment } from './../classes/comment';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../classes/post';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'sd-post-view',
    templateUrl: 'post-view.component.html',
    styleUrls: ['post-view.component.css']
})
export class PostViewComponent implements OnInit, OnDestroy {

    private id: string;
    private sub: any;

    private editPost = false;

    private editComment = false;
    private editId: string;

    private post: Post;
    private comments: Comment[] = [];

    constructor(private router: Router,
        private route: ActivatedRoute,
        private _postService: PostService,
        private _commentService: CommentService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getPost();

        // without backend mock data
        // this.post = {
        //     id: 3,
        //     title: 'Frage zu Aufgabe 3',
        //     text: 'Wieso sollen wir Aufgabe 3 machen?',
        //     status: 'open',
        //     postTime: '31.03.2009',
        //     username: 'Diogenes'
        // };

        // this.comments = [
        //     {
        //         id: 1,
        //         text: 'Verstehe ich auch nicht',
        //         commentTime: 'eben',
        //         username: 'Kommentator'
        //     },
        //     {
        //         id: 2,
        //         text: 'Warum sind wir hier? Woher kommen wir? Wohin gehen wir?' +
        //         ' Das sind doch wesentlich wichtigere Fragen, die es zu klären gilt!',
        //         commentTime: 'vor 3 Tagen',
        //         username: 'Maria Musterfrau'
        //     },
        //     {
        //         id: 3,
        //         text : 'Wer reitet so spät durch Nacht und Wind?' +
        //         'Es ist der Vater mit seinem Kind;' +
        //         'Er hat den Knaben wohl in dem Arm,' +
        //         'Er fasst ihn sicher, er hält ihn warm.' +

        //         'Mein Sohn, was birgst du so bang dein Gesicht? –' +
        //         'Siehst, Vater, du den Erlkönig nicht?' +
        //         'Den Erlenkönig mit Kron’ und Schweif? –' +
        //         'Mein Sohn, es ist ein Nebelstreif. –' +

        //         '„Du liebes Kind, komm, geh mit mir!' +
        //         'Gar schöne Spiele spiel’ ich mit dir;' +
        //         'Manch’ bunte Blumen sind an dem Strand,' +
        //         'Meine Mutter hat manch gülden Gewand.“ –' +

        //         'Mein Vater, mein Vater, und hörest du nicht,' +
        //         'Was Erlenkönig mir leise verspricht? –' +
        //         'Sei ruhig, bleibe ruhig, mein Kind;' +
        //         'In dürren Blättern säuselt der Wind. –' +

        //         '„Willst, feiner Knabe, du mit mir gehn?' +
        //         'Meine Töchter sollen dich warten schön;' +
        //         'Meine Töchter führen den nächtlichen Reihn' +
        //         'Und wiegen und tanzen und singen dich ein.“ –' +

        //         'Mein Vater, mein Vater, und siehst du nicht dort' +
        //         'Erlkönigs Töchter am düstern Ort? –' +
        //         'Mein Sohn, mein Sohn, ich seh’ es genau:' +
        //         'Es scheinen die alten Weiden so grau. –' +

        //         '„Ich liebe dich, mich reizt deine schöne Gestalt;' +
        //         'Und bist du nicht willig, so brauch’ ich Gewalt.“ –' +
        //         'Mein Vater, mein Vater, jetzt faßt er mich an!' +
        //         'Erlkönig hat mir ein Leids getan! –' +

        //         'Dem Vater grauset’s; er reitet geschwind,' +
        //         'Er hält in Armen das ächzende Kind,' +
        //         'Erreicht den Hof mit Mühe und Not;' +
        //         'In seinen Armen das Kind war tot.',
        //         commentTime: 'gestern',
        //         username: 'Johann Wolfgang von Goethe'
        //     }
        // ];
    }


    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    private getPost() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];

            this._postService.getPost(this.id).subscribe(
                data => {
                    this.post = data;
                    this.getComments();
                }
            );
        });
    }


    private getComments() {
        this._commentService.getComments(this.post._id).subscribe(
            data => {
                this.comments = data;
            }
        );
    }


    private updatePost(): void {
        if (this.editPost) {
            this.editPost = false;
            this._postService.updatePost(this.post).subscribe();
        } else {
            this.editPost = true;
        }
    }


    private closePost(): void {
        this.post.status = 'Closed';
        this._postService.updatePost(this.post).subscribe();
    }


    private deletePost() {
        this._postService.deletePost(this.post._id).subscribe();

        this.router.navigate(['/']);
    }


    private createComment(username: string, text: string): void {
        const comment: Comment = new Comment();
        comment.postId = this.post._id;
        comment.text = text;
        comment.username = username;

        this._commentService.createComment(comment).subscribe(
            data => {
                this.getComments();
            }
        );
    }


    private updateComment(id: string): void {
        if (this.editComment) {
            this.editComment = false;
            this.editId = null;

            let comment: Comment = new Comment();
            this.comments.forEach(element => {
                if (element._id === id) {
                    comment = element;
                }
            });

            // console.log(comment);

            this._commentService.updateComment(comment).subscribe();
        } else {
            this.editComment = true;
            this.editId = id;
        }
    }


    private deleteComment(id: string): void {
        this._commentService.deleteComment(id).subscribe();

        this.getComments();
    }
}
