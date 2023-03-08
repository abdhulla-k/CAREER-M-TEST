import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: CareerComponent },
  { path: 'details', component: JobDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
