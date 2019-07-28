import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
})
export class CampaignsPage implements OnInit {

  constructor(private navController: NavController,public global:GlobalService) { }
  public campaigns: Campaign[];
  ngOnInit() {
    this.campaigns = new Array<Campaign>();
    this.campaigns.push(
      new Campaign("Hurricane Katrina"
        , "U.S.A.",
        "Extremely destructive and deadly Category 5 hurricane that made landfall on Florida and Louisiana",
        "/assets/img/kat/img1.jpg",
        "Destroyed home on New Orleans",
        "The storm originated over the Bahamas on August 23, 2005, from the merger of a tropical wave and the remnants of Tropical Depression Ten. Early on the following day, the tropical depression then intensified into a tropical storm as it headed generally westward toward Florida, strengthening into a hurricane only two hours before making landfall at Hallandale Beach and Aventura on August 25",
        [{ name: "Water Bottles", icon: "water" },
        { name: "Clothes", icon: "shirt" },
        { name: "Food", icon: "nutrition" }
        ],
        []
      ));

  }
  navigateTo(campaign: Campaign) {
    let navigationExtras: NavigationExtras = {
      state: {
        campaign: campaign
      }
    };
    this.navController.navigateForward(["campaign-details"], navigationExtras);
  }
}
