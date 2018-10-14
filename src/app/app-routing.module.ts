import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'latest-govt-jobs', loadChildren: './latest-govt-jobs/latest-govt-jobs.module#LatestGovtJobsPageModule' },
  { path: 'jobs-in-abroad', loadChildren: './jobs-in-abroad/jobs-in-abroad.module#JobsInAbroadPageModule' },
  { path: 'jobs-closing-soon', loadChildren: './jobs-closing-soon/jobs-closing-soon.module#JobsClosingSoonPageModule' },
  { path: 'upcoming-jobs', loadChildren: './upcoming-jobs/upcoming-jobs.module#UpcomingJobsPageModule' },
  { path: 'bank-jobs', loadChildren: './bank-jobs/bank-jobs.module#BankJobsPageModule' },
  { path: 'defence-jobs', loadChildren: './defence-jobs/defence-jobs.module#DefenceJobsPageModule' },
  { path: 'railway-jobs', loadChildren: './railway-jobs/railway-jobs.module#RailwayJobsPageModule' },
  { path: 'clerical-jobs', loadChildren: './clerical-jobs/clerical-jobs.module#ClericalJobsPageModule' },
  { path: 'police-jobs', loadChildren: './police-jobs/police-jobs.module#PoliceJobsPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
