import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
    searchItem = '';
    searchButton = false;
    searchInput = true;

  constructor() {
      setTimeout(() => {
        this.searchButton = true; /* after 2 seconds the search button will be enabled*/
      }, 2000);
    }

  ngOnInit() {
  }

  onSearch(event: Event) {
      this.searchItem = (<HTMLInputElement>event.target).value;  /* binding to the what the user is inputing in the search bar*/
    }

  onSearchFocus () {    /* will change the DOM when the search input field is focused */
    this.searchInput = false;
  }
}
