import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../campaign';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.page.html',
  styleUrls: ['./campaign-details.page.scss'],
})
export class CampaignDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
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

}
