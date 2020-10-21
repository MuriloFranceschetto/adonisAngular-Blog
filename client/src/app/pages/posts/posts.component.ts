import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  public posts: Object[] = [];
  
  public hasNew: boolean = false;
  public newPostObj = {
    new: true,
    user: 1,
    title: 'Type Here the Title...',
    content: 'Type Here the Content...',
    images: [],
  }
  
  public form = new FormGroup({
    id: new FormControl(1, Validators.required),
    user: new FormControl(1, Validators.required),
    title: new FormControl(null, Validators.required),
    content: new FormControl(null),
    images: new FormControl([]),
  });
  
  constructor(
    private postsService: PostsService,
    private dialog: MatDialog,
    ) { }
    
    ngOnInit(): void {
      this.getAllPosts();
    }
    
    getAllPosts() {
      this.postsService.getAll()
      .then((response: Object[]) => {
        this.posts = response;
      })
      .catch(err => {
        console.log(err);
      })
    }
    
    newPost() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
      if (!this.hasNew) {
        this.posts = [ this.newPostObj, ...this.posts];
        this.hasNew = true;
      }
    }
    
    publish() {
      this.posts = [];
      console.log(this.form.getRawValue());
      this.postsService.post(this.form.getRawValue())
      .then(() => {
        console.log('Post Registrado com Sucesso');
        this.getAllPosts();
      })
      .catch(err => console.log(err))
    }
    
    setImagesPost(images) {
      this.form.controls.images.setValue([...this.form.value.images, ...images]);
    }
    
    like(postID) {
      
    }
    
    coment(postID, data) {
      
    }
    
  }
  