import { Component, OnInit } from '@angular/core';
import { ApiService } from "./../services/api.service";
import { NavController } from '@ionic/angular';
import { HomePage } from "./../home/home.page";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(public apiService: ApiService, public navController: NavController, private activatedRoute: ActivatedRoute) { }

  post: any;
  comments: any;
  user: any;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.getPost(id);
  }

  getPost(id) {
    this.apiService.getPost(id).then(data => {this.post = data;})
      .then(data => {this.apiService.getUser(this.post.userId).then(data2 => {this.user = data2;});})
    
    this.apiService.getCommentsPost(id).then(data => {this.comments = data;});
  }

}
