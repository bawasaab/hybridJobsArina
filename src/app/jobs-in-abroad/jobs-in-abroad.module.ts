import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JobsInAbroadPage } from './jobs-in-abroad.page';

const routes: Routes = [
  {
    path: '',
    component: JobsInAbroadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JobsInAbroadPage]
})
export class JobsInAbroadPageModule {}
