import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../../interfaces/blog';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html'
})
export class CreatePostComponent {

  @Output()
  public showCreateComponent = new EventEmitter<boolean>(false);
  public showMessage: boolean = false;

  registerPostForm: FormGroup;

  constructor(private blogService: BlogService) { 
    this.registerPostForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      publishDate: new FormControl('', [Validators.required])
    })
  };

  onSubmit(): void {
    const newPost = {
      title: this.registerPostForm.get('title')?.value,
      description: this.registerPostForm.get('description')?.value,
      author: {
        firstName: this.registerPostForm.get('firstName')?.value,
        lastName: this.registerPostForm.get('lastName')?.value
      },
      publishDate: this.registerPostForm.get('publishDate')?.value
    }
    this.registerPostForm.reset();
    this.showAlertMessage();
    this.blogService.setPost(newPost);
  }
  
  showAlertMessage(): void {
    this.showMessage = true;
    setTimeout( () => {
      this.showMessage = false;
    }, 10000)
  }

  toggleCreateComponent(): void {
    this.showCreateComponent.emit(!this.showCreateComponent);
  }


}
