import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/Post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[]

  constructor() {
    this.posts = new Array()
   }

  ngOnInit(): void {

  }

}
