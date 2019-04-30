import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  apiUrl = 'https://jsonplaceholder.typicode.com';

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getPosts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/posts').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUser(userId) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users/'+userId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getPost(postId) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/posts/'+postId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCommentsPost(postId) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/posts/'+postId+'/comments').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addPost(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/posts', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
