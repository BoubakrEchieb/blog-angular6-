import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[];
  constructor() {
    this.posts = [
      {
        title: 'Post 1',
        content: 'Lorem ipsum dolor sit amet, eu invenire abhorreant eloquentiam per, vim reque putent repudiare eu, ex maiorum pericula mel. Cum te ipsum veritus percipit, eam nullam prodesset vituperata ad, vis eleifend accommodare ea. Nam at tamquam tacimates delicatissimi, dicat tacimates tractatos usu ne',
        loveIts: 3,
        createdAt: new Date()
      },
      {
        title: 'Post 2',
        content: 'Lorem ipsum dolor sit amet, eu invenire abhorreant eloquentiam per, vim reque putent repudiare eu, ex maiorum pericula mel. Cum te ipsum veritus percipit, eam nullam prodesset vituperata ad, vis eleifend accommodare ea. Nam at tamquam tacimates delicatissimi, dicat tacimates tractatos usu ne',
        loveIts: -2,
        createdAt: new Date()
      },
      {
        title: 'Post 3',
        content: 'Lorem ipsum dolor sit amet, eu invenire abhorreant eloquentiam per, vim reque putent repudiare eu, ex maiorum pericula mel. Cum te ipsum veritus percipit, eam nullam prodesset vituperata ad, vis eleifend accommodare ea. Nam at tamquam tacimates delicatissimi, dicat tacimates tractatos usu ne',
        loveIts: 0, createdAt: new Date()
      },
    ]
  }

  ngOnInit() {
  }

}
