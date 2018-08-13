import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;

  class: any;
  constructor() { }

  ngOnInit() {
    this.class = {
      'list-group-item': true,
      'list-group-item-danger': this.loveIts > 0,
      'list-group-item-success': this.loveIts < 0
    }
  }
  onLoveIt(): void {
    this.loveIts++;
    this.refreshClass();
    console.log('I love it ! :D ');
  }
  onDontLoveIt(): void {
    this.loveIts--;
    this.refreshClass();
    console.log('I do not love it !! :( ');
  }
  refreshClass(): void{
    if (this.loveIts > 0) {
      this.class = {
        'list-group-item': true,
        'list-group-item-success': true
      }
    } else if (this.loveIts == 0) {
      this.class = {
        'list-group-item': true,
      }
    }
    else {
      this.class = {
        'list-group-item': true,
        'list-group-item-danger': true
      }
    }
  }
}
