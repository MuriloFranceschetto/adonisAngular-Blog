import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }

  async getAll() {
      return await this.http.get('http://127.0.0.1:3333/posts').toPromise();
  }
  
  async post(newPost) {
      return await this.http.post('http://127.0.0.1:3333/posts', newPost).toPromise();
  }


}
