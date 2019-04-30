import { Component, OnInit } from '@angular/core';
import { ApiService } from "./../services/api.service";
import { NavController } from '@ionic/angular';
import { HomePage } from "./../home/home.page";

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.page.html',
  styleUrls: ['./addpost.page.scss'],
})
export class AddpostPage implements OnInit {
  
  post = {
    userId: 1,
    title: '',
    body: ''
  };

  constructor(public apiService: ApiService, public navController: NavController) { }

  ngOnInit() {
  }

  savePost() {
    this.apiService.addPost(this.post).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
    this.navController.back();
  }

}
