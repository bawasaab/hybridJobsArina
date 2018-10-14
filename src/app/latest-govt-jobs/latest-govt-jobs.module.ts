import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LatestGovtJobsPage } from './latest-govt-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: LatestGovtJobsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LatestGovtJobsPage]
})
export class LatestGovtJobsPageModule {}
