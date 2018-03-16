import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../models/ipost';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styles: []
})

export class PostDetailComponent implements OnInit {

  public post: IPost = {
    id: null,
    title: '',
    body: ''
  } ;

  constructor(private route: ActivatedRoute, private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPostDetail(id).subscribe(post => this.post = post);
  }

}
