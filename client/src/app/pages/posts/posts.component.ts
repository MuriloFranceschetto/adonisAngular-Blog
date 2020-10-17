import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: Object[] = [];

  constructor(private postsService: PostsService) { }

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

}
