import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfirmReceptionPage } from './confirm-reception.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmReceptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfirmReceptionPage]
})
export class ConfirmReceptionPageModule {}
