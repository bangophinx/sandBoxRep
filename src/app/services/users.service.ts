import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class UsersService {
  servUsers: Iuser[];
  url: string = "../../assets/data/users.json";
  userUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.url); 
  }

  addUser (user: Iuser): Observable<Iuser>{
    return this.http.post<Iuser>(this.userUrl, user, httpOptions);
  }


}
