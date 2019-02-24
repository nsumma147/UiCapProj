import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
    searchItem = '';
    searchButton = false;
    searchInput = false;

  constructor() {
      setTimeout(() => {
        this.searchButton = true; /* after 2 seconds the search button will be enabled*/
        this.searchInput = true;  /* after 2 seconds the input value will show*/
      }, 2000);
    }

  ngOnInit() {
  }

  onSearch(event: Event) {
      this.searchItem = (<HTMLInputElement>event.target).value;  /* binding to the what the user is inputing in the search bar*/
    }
}
