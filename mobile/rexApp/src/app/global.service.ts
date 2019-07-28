import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public user: any;
  public items: any[];
  constructor() {
    this.user = { avatar: "/assets/img/users/giver.jpg", isOng: true };
    this.items = [
      { name: "Water Bottles", icon: "water" },
      { name: "Clothes", icon: "shirt" },
      { name: "Food", icon: "nutrition" },
      { name: "Batteries", icon: "battery-full" },
      { name: "Money", icon: "cash" },
      { name: "Shelter", icon: "bed" },
      { name: "Volunteering", icon: "time" },
    ];
  }
}
