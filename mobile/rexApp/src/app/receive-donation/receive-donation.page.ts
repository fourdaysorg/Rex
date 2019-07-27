import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receive-donation',
  templateUrl: './receive-donation.page.html',
  styleUrls: ['./receive-donation.page.scss'],
})
export class ReceiveDonationPage implements OnInit {
  public waiting: boolean = false;
  constructor() { }

  ngOnInit() {
    let me = this;
    setTimeout(() => {
      me.waiting = true;
      setTimeout(() => {
        me.waiting = false;
      }, 5000);
    }, 10000);
  }

}
