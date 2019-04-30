import { Component, ViewChild  } from '@angular/core';
import { ApiService } from "./../services/api.service";
import { AddpostPage } from './../addpost/addpost.page';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private router: Router, public apiService: ApiService) {
    this.posts = [];
    for (let i = 0; i < 10; i++) {
      this.posts.push("Item number " + this.posts.length);
    }
    this.getPosts();
  }

  users: any;
  posts: any;

  loadData(event) {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.posts.push("Item number " + this.posts.length);
      }
      this.getPosts();
      event.target.complete();
      if (this.posts.length == 100) {
        event.target.disable = true;
      }
    }, 500);
  }

  getUsers() {
    this.apiService.getUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  getPosts() {
    this.apiService.getPosts()
      .then(data => {
        this.posts = data;
        console.log(this.posts);
      });
  }

  goAddPostPage(){
    this.router.navigate(['/addpost'])
  }

}
