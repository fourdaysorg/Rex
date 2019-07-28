import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-reception',
  templateUrl: './confirm-reception.page.html',
  styleUrls: ['./confirm-reception.page.scss'],
})
export class ConfirmReceptionPage implements OnInit {

  waiting = false;
  finished = false;
  constructor() { }

  ngOnInit() {
  }
  donate() {
    let me=this;
    me.waiting=true;
    setTimeout(()=>{me.waiting=false; me.finished=true;},2000);

  }
}
