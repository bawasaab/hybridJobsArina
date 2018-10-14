import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClericalJobsPage } from './clerical-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: ClericalJobsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClericalJobsPage]
})
export class ClericalJobsPageModule {}
