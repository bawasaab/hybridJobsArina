import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PoliceJobsPage } from './police-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: PoliceJobsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PoliceJobsPage]
})
export class PoliceJobsPageModule {}
