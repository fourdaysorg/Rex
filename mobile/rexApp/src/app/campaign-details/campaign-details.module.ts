import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CampaignDetailsPage } from './campaign-details.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CampaignDetailsPage]
})
export class CampaignDetailsPageModule {}
