import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  // template: `
  //   <h3>Success: you have successfully generated Success Alert Component.</h3>
  // `,
  styleUrls: ['./success-alert.component.css']
  // styles: [`
  //   h3 {
  //     color: green;
  //   }
  // `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
