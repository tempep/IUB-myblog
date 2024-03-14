import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../interfaces/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html'
})
export class PostsListComponent implements OnInit{

  public arrayPosts: Blog[] = [];

  @Output()
  public showPostComponent = new EventEmitter<boolean>();

  @Output()
  public postToShow = new EventEmitter<Blog>();

  constructor(private blogService: BlogService){};

  ngOnInit(): void {
    this.arrayPosts = this.blogService.getPosts();
    console.log(this.arrayPosts);
  }

  togglePostComponent(post: Blog): void {
    this.showPostComponent.emit(true);
    this.postToShow.emit(post);
  }

}
