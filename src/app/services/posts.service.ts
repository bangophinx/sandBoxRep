import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPost } from '../models/ipost';
import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class PostsService {
  postsUrl: string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this.postsUrl);
  }

  addPost(post: IPost):Observable<IPost>{
    return this.http.post<IPost>(this.postsUrl, post, httpOptions)
  }
  
  getPostDetail(id: number): Observable<IPost>{
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<IPost>(url);
  }

  removePost(id: number){
    const deleteUrl = `${this.postsUrl}/${id}`; 
    return this.http.delete(deleteUrl, httpOptions);
  }




}


