import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  removeItemStatus = "";

  constructor() { }

  ngOnInit() {
  }

  onRemoveItem() {
    this.removeItemStatus = "Item removed."; /* displays item was removed when button clicked on cartpage*/
  }
}
