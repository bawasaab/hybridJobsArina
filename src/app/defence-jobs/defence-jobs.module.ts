import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DefenceJobsPage } from './defence-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: DefenceJobsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DefenceJobsPage]
})
export class DefenceJobsPageModule {}
