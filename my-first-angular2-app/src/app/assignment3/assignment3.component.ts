import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  toggleDetails = false;
  logClicks = [];
  clickCount = 0;

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetailsClick() {
    this.clickCount++;
    this.toggleDetails = !this.toggleDetails;
    this.logClicks.push({count: this.clickCount, time: new Date()});
  }

  getBackgroundColor(count) {
    if(count > 4)
    {
      return 'blue';
    }
  }
}
