import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../interfaces/blog';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html'
})
export class ShowPostComponent {

  @Input()
  public post!: Blog;

  @Output()
  public closePost = new EventEmitter<boolean>(false);

  showPost(): void {
    console.log(this.post);
  }

  onClosePost(): void {
    this.closePost.emit(true);
  }

}
