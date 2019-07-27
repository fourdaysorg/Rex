import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../campaign';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.page.html',
  styleUrls: ['./campaign-details.page.scss'],
})
export class CampaignDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private navController: NavController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.campaign = this.router.getCurrentNavigation().extras.state.campaign;
      }
    });
  }
  @Input()
  campaign: Campaign;
  ngOnInit() {

  }

  donate(campaign: Campaign) {
    let navigationExtras: NavigationExtras = {
      state: {
        campaign: campaign
      }
    };
    this.navController.navigateForward(["donate"], navigationExtras);
  }

}
