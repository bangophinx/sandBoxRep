import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private postService: PostsService, private router: Router) { }

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

  onDelete(postId) {
    this.postService.removePost(postId).subscribe();
    this.posts.forEach((post, i) => {
      if (post.id === postId) {
        this.posts.splice(i, 1);
      }
      else{
        console.log('not true');
      }
    });
  }

  onPostClick(post) {
    this.router.navigate(["/posts", post.id]);
  }

}
