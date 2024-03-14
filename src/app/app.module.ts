import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IubPageComponent } from './pages/iub-page/iub-page.component';
import { SharedModule } from './shared/shared.module';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IubPageComponent,
    CreatePostComponent,
    ShowPostComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
