import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'campaigns', loadChildren: './campaigns/campaigns.module#CampaignsPageModule' },
  { path: 'campaign-details', loadChildren: './campaign-details/campaign-details.module#CampaignDetailsPageModule' },
  { path: 'donate', loadChildren: './donate/donate.module#DonatePageModule' },
  { path: 'receive-donation', loadChildren: './receive-donation/receive-donation.module#ReceiveDonationPageModule' },
  { path: 'confirm-reception', loadChildren: './confirm-reception/confirm-reception.module#ConfirmReceptionPageModule' },
  { path: 'confirm-donation', loadChildren: './confirm-donation/confirm-donation.module#ConfirmDonationPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
