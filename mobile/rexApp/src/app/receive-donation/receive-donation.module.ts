import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceiveDonationPage } from './receive-donation.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiveDonationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceiveDonationPage]
})
export class ReceiveDonationPageModule {}
