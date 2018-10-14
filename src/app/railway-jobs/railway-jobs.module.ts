import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RailwayJobsPage } from './railway-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: RailwayJobsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RailwayJobsPage]
})
export class RailwayJobsPageModule {}
