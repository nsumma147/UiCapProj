import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {
    enableButton = false;
    infoShow = false;
    buyingHistoryShow = false;
    sellingHistoryShow = false;
    recentlyViewedShow = false;

  constructor() {
    setTimeout(() => {
      this.enableButton = true;
    },2000);

  }

  ngOnInit() {
  }

  onClickAccountButton () {
    this.infoShow = true;
    this.buyingHistoryShow = false;
    this.sellingHistoryShow = false;
    this.recentlyViewedShow = false;
  }

  onClickBuyingHistoryButton () {
    this.infoShow = false;
    this.buyingHistoryShow = true;
    this.sellingHistoryShow = false;
    this.recentlyViewedShow = false;
}

  onClickSellingHistoryButton () {
    this.infoShow = false;
    this.buyingHistoryShow = false;
    this.sellingHistoryShow = true;
    this.recentlyViewedShow = false;

  }

  onClickRecentlyViewedButton () {
    this.infoShow = false;
    this.buyingHistoryShow = false;
    this.sellingHistoryShow = false;
    this.recentlyViewedShow = true;
  }

}
