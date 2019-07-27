import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-receive-donation',
  templateUrl: './receive-donation.page.html',
  styleUrls: ['./receive-donation.page.scss'],
})
export class ReceiveDonationPage implements OnInit {
  public waiting: boolean = false;
  constructor(private navController: NavController) { }

  ngOnInit() {
    let me = this;
    setTimeout(() => {
      me.waiting = true;
      setTimeout(() => {
        me.waiting = false;
        this.navController.navigateForward("confirm-reception");
      }, 5000);
    }, 10000);
  }

}
