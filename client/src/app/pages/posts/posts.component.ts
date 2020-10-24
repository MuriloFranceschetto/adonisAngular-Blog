import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {PostsService} from './posts.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

    public posts: Object[] = [];

    public hasNew = false;
    public newPostObj = {
        new: true,
        id: 1,
        created_at: null,
        updates_at: null,
        user: 1,
        title: null,
        content: null,
        likes: null,
        images: [],
    };

    public form = new FormGroup({
        new: new FormControl(null),
        created_at: new FormControl(null),
        updates_at: new FormControl(null),
        id: new FormControl(null),
        user: new FormControl(null, Validators.required),
        title: new FormControl(null, Validators.required),
        content: new FormControl(null),
        likes: new FormControl(null),
        images: new FormControl(null),
    });

    constructor (
        private postsService: PostsService,
        private snackBar: MatSnackBar
    ) {
    }

    ngOnInit(): void {
        this.getAllPosts();
    }

    getAllPosts() {
        this.postsService.getAll()
            .then((response: any[]) => {
                for (const el of response) {
                    el.new = false;
                    el.images = [];
                    if (!el.updates_at) {
                        el.updates_at = null;
                    }
                }
                this.posts = response;
            })
            .catch(err => {
                this.openSnack(err.error.error.message, true);
            });
    }

    newPost() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        if (!this.hasNew) {
            this.form.setValue(this.newPostObj);
            this.hasNew = true;
        }
    }

    publish() {
        this.posts = [];
        this.postsService.post(this.form.getRawValue())
            .then(() => {
                this.form.reset();
                this.openSnack('Post Registrado com Sucesso');
                this.getAllPosts();
                this.hasNew = false;
            })
            .catch(err => this.openSnack(err.error.error.message, true));
    }

    setImagesPost(images) {
        this.form.controls.images.setValue([...this.form.value.images, ...images]);
    }

    removeImage(index) {
        const arrayAux = this.form.value.images;
        arrayAux.splice(index, 1);
        this.form.controls.images.setValue(arrayAux);
    }

    like(id, i) {
        this.postsService.like(id)
            .then((response) => {
                this.posts[i]['likes'] = response;
            })
            .catch(err => this.openSnack(err.error.error.message, true));
    }

    edit(i) {
        this.form.setValue(this.posts[i]);
        this.posts[i]["new"] = true;
    }

    save() {

    }

    coment(postID, data) {

    }

    openSnack(message: string, erro?: boolean) {
        const config = new MatSnackBarConfig;
        config.duration = (erro) ? 5000 : 3000;
        config.panelClass = (erro) ? ['snackErro'] : ['snackSucess'];
        this.snackBar.open(message, 'X', config);
    }

}
