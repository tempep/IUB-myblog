import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../interfaces/blog';

@Component({
  selector: 'app-iub-page',
  templateUrl: './iub-page.component.html'
})
export class IubPageComponent implements OnInit{

  public blogPosts: Blog[] = [];
  public showCreateComponent!: boolean;
  public showPostComponent!: boolean;
  public showListComponent: boolean = true;
  public post!: Blog;

  constructor(private blogService: BlogService){};

  ngOnInit(): void {
      this.blogService.arrayPosts$.subscribe( (post) => {
        console.log(post);
        this.blogPosts.push(post);
        console.log(this.blogPosts);
    });
  }

  toggleCreateComponent(value: boolean): void {
    this.showCreateComponent = value;
    console.log(this.showCreateComponent);
    this.showListComponent = !value;
    this.showPostComponent = false;
  }

  togglePostComponent(value: boolean): void {
    this.showPostComponent = value;
    this.showListComponent = false;
    this.showCreateComponent = false;
  }

  toggleListComponent(value: boolean): void {
    this.showListComponent = value;
    this.showPostComponent = false;
    this.showCreateComponent = false;
  }

  postToShow(post: Blog): void {
    this.post = post;
  }

  onClosePost(value: boolean): void {
    if( !value ) return;
    this.showPostComponent = !value;
    this.showCreateComponent = false;
    this.showListComponent = true;
  }


}
