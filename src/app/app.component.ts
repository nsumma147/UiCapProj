import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BridelyApp';

  onClickSearchApp () {     /*making the landing page disappear when search button is clicked*/
    var x = document.getElementById("landing-page");
      x.style.display = "none";

    var y = document.getElementById("market");
      y.style.display = "block";
      }
}
