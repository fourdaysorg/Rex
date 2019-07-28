import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public recentDonations: any[]=[];

  private names = ["Finn", "Esteban", "Victoria", "Hector", "Joseph", "John", "Marie", "Won", "Christian"];
  private avatars=["/assets/img/users/avatar1.svg","/assets/img/users/avatar2.svg","/assets/img/users/avatar3.svg","/assets/img/users/avatar4.svg"];
  constructor(public global: GlobalService) {
    this.recentDonations.push({
      name: this.names[0],
      avatar:this.avatars[0],
      icon: global.items[0].icon,
      description: global.items[0].name,
      amount: 30
    });
  }

}
