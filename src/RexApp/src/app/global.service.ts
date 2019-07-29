import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public user: any;
  public items: any[];
  public donatedItems: any[]=[];
  constructor() {
    this.user = { avatar: "/assets/img/users/receiver.jpg", isOng: true };
    this.items = [
      { name: "Water Bottles", icon: "water" },
      { name: "Clothes", icon: "shirt" },
      { name: "Food", icon: "nutrition" },
      { name: "Batteries", icon: "battery-full" },
      { name: "Money", icon: "cash" },
      { name: "Shelter", icon: "bed" },
      { name: "Volunteering", icon: "time" },
    ];
    this.donatedItems.push(
       { persistent: true, name: this.items[0].name + ":", icon: this.items[0].icon, count: 5 });
       
    this.donatedItems.push(
      { persistent: true, name: this.items[1].name + ":", icon: this.items[1].icon, count: 2 });
      
  }
}
