import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {
  campaign: Campaign;
  donations: any[]
  itemName: string="";
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.campaign = this.router.getCurrentNavigation().extras.state.campaign;
        this.donations = this.campaign.AvailableItems.map((i) => {
          return { persistent: true, name: i.name + ":", icon: i.icon, count: 0 };
        });
      }
    });

  }

  ngOnInit() {
  }
  increase(item) {
    item.count++;
  }
  decrease(item) {
    if (item.count > 0) {
      item.count--;
    }
  }
  addItem() {
    this.donations.push({ persistent: false, name: this.itemName + ":", icon: "", count: 0 });
    this.itemName="";
  }

  removeItem(item) {
    var index = this.donations.indexOf(item);
    if (index > -1) {
      this.donations.splice(index, 1);
    }
  }

}
