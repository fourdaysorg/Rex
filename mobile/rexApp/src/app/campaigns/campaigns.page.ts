import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
})
export class CampaignsPage implements OnInit {

  constructor() { }
  public campaigns:Campaign[];
  ngOnInit() {
    this.campaigns = new Array<Campaign>();
    this.campaigns.push(
      new Campaign("Hurricane Katrina"
      ,"U.S.A.",
      "Extremely destructive and deadly Category 5 hurricane that made landfall on Florida and Louisiana"));
      
  }

}
