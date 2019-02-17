import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
firstName = '';
lastName = '';
email = '';
userName = '';
userName2 = '';

  constructor() { }

  ngOnInit() {
  }

/* these will display the user input for the fields on the login page*/
  onUpdateFirstName(event: Event) {
    this.firstName = (<HTMLInputElement>event.target).value;
  }

  onUpdateLastName(event: Event) {
    this.lastName = (<HTMLInputElement>event.target).value;
  }

  onUpdateEmail(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName2(event: Event) {
    this.userName2 = (<HTMLInputElement>event.target).value;
  }

}
