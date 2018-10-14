import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmailSubscriptionPage } from './email-subscription.page';

const routes: Routes = [
  {
    path: '',
    component: EmailSubscriptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmailSubscriptionPage]
})
export class EmailSubscriptionPageModule {}
