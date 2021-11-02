import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../shared/models/Post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  @Input() post:Post|undefined
}
