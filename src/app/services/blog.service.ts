import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private arrayPosts: Blog[] = [{
    author:{
      firstName:'Fernando', lastName: 'Hernandez'
    },
    description:'Im doing an Angular course',
    publishDate:'14/03/2024',
    title:'Angular Course'
  },
  {
    author:{
      firstName:'Fernandosadasdasdasdasd', lastName: 'Hernandezasdadasdasdasd'
    },
    description:'Im doing an React course at DevTalles Website sdjhajahdjshjahsdjahsdhajhdjahsdjhajshd',
    publishDate:'14/03/2024',
    title:'React Course'
  }
];
  private posts = new Subject<Blog>();
  arrayPosts$: Observable<Blog> = this.posts.asObservable();

  constructor() { }

  setPost(newPost: Blog): void {
    console.log(newPost);
    //this.posts.next(newPost);
    this.arrayPosts.push(newPost);
  }

  getPosts(): Blog[] {
    return this.arrayPosts;
  }

}
