import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-donation',
  templateUrl: './confirm-donation.page.html',
  styleUrls: ['./confirm-donation.page.scss'],
})
export class ConfirmDonationPage implements OnInit {
  donations: any[];
  waiting = false;
  finished = false;
  constructor(private route: ActivatedRoute, private router: Router, private navController: NavController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.donations = this.router.getCurrentNavigation().extras.state.donations;
        console.log(this.donations);
      }
    });
  }

  ngOnInit() {
  }
  donate() {
    let me=this;
    me.waiting=true;
    setTimeout(()=>{me.waiting=false; me.finished=true;},2000);

  }
}
