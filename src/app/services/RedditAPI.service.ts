import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RedditAPI {
  url:string = 'https://www.reddit.com/r/lakers/new.json';

  constructor(private http: HttpClient) {

  }

  getListing():Observable<any>{
    return this.http.get<any>(this.url)
  }
  getComments(id:string):Observable<any> {
    return this.http.get('https://www.reddit.com/comments/'+ id +'/.json')
  }
}
