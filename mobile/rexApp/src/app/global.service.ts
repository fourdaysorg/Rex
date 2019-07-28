import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public user:any;
  constructor() { 
    this.user={avatar:"/assets/img/users/giver.jpg", isOng:true };
  }
}
