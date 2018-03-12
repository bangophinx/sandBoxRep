import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../models/ipost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
  posts: IPost[];
  editingPost: boolean = false;
  post: IPost = {
    title: "",
    body: ""
  };


  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts =>
      this.posts = posts);
  }

  onEditPost(post) {
    this.post = post;
    this.editingPost = true;
  }

  onAddPost(post) {
    this.postService.addPost(post)
      .subscribe(post => this.posts.unshift(post));
  }

  onSubmitEdit() {
    this.posts.forEach((post, i) => {
      if (this.post.id === post.id) {
        this.posts.splice(i, 1);
        this.posts.unshift(post);
      }
    });
    this.editingPost = false;
    this.post = {
      title: "",
      body: ""
    };
  }

}
