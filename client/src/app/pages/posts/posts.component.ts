import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: Object[] = [];

  public hasNew: boolean = false;

  public newPostObj: Object = {
    new: true,
    title: 'Type Here the Title...',
    content: 'Type Here the Content...',
    images: [],
  }

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
    setTimeout(() => {
      document.getElementById('newtitle').focus();
    }, 500);
  }

  publish() {
    
  }

}
