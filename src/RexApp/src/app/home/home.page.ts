import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public recentDonations: any[] = [];

  private names = ["Finn", "Esteban", "Victoria", "Hector", "Joseph", "John", "Marie", "Won", "Christian"];
  private avatars = ["/assets/img/users/avatar1.svg", "/assets/img/users/avatar2.svg", "/assets/img/users/avatar3.svg", "/assets/img/users/avatar4.svg"];
  constructor(public global: GlobalService) {
    this.createRandomDonation();
    this.createRandomDonation();
    this.createRandomDonation();
    this.step();
  }

  private step() {
    let me=this;
    let func = ()=>{
      me.createRandomDonation();
      setTimeout(func,500+Math.random()*2000);
    };
    func();
  }
  private createRandomDonation() {
    let item = this.getRandomItemFrom(this.global.items);
    this.recentDonations.push({
      name: this.getRandomItemFrom(this.names),
      avatar: this.getRandomItemFrom(this.avatars),
      icon: item.icon,
      description: item.name,
      amount: Math.floor(Math.random() * 40)
    });
    while(this.recentDonations.length>4)
    {
      this.recentDonations.shift();
    }
  }
  private getRandomItemFrom(anArray: any[]): any {
    return anArray[Math.floor(Math.random() * anArray.length)];
  }

}
