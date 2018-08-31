import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
    searchItem = '';


  constructor() { }

  ngOnInit() {
  }

  onSearch(event: Event) {
      this.searchItem = (<HTMLInputElement>event.target).value;
    }

}
