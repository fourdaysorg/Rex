import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.page.html',
  styleUrls: ['./campaign-details.page.scss'],
})
export class CampaignDetailsPage implements OnInit {

  constructor() { }
  @Input()
  campaign:Campaign;
  ngOnInit() {
    
  }

}
