import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
})
export class CampaignsPage implements OnInit {

  constructor(private navController: NavController) { }
  public campaigns: Campaign[];
  ngOnInit() {
    this.campaigns = new Array<Campaign>();
    this.campaigns.push(
      new Campaign("Hurricane Katrina"
        , "U.S.A.",
        "Extremely destructive and deadly Category 5 hurricane that made landfall on Florida and Louisiana"));

  }
  navigateTo(campaign: Campaign) {
    let navigationExtras: NavigationExtras = {
      state: {
        campaign: campaign
      }
    };
    this.navController.navigateForward(["campaign-details"],navigationExtras);
  }
}
