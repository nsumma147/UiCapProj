import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickSearchLP () {     /*making the landing page disappear when search button is clicked*/
    var x = document.getElementById("landing-page");
      x.style.display = "none";

    var y = document.getElementById("market");
      y.style.display = "block";
      }

}
