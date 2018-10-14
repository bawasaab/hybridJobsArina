import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JobsClosingSoonPage } from './jobs-closing-soon.page';

const routes: Routes = [
  {
    path: '',
    component: JobsClosingSoonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JobsClosingSoonPage]
})
export class JobsClosingSoonPageModule {}
