import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {
    enableButton = false;
    infoShow = false;

  constructor() {
    setTimeout(() => {
      this.enableButton = true;
    },2000);

  }

  ngOnInit() {
  }

  onClickAccountButton () {
    this.infoShow = true;
  }
}
