import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardPage } from './pages/dashboard/dashboard.page';

@NgModule({
  declarations: [
    UserDashboardPage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserDashboardPage
  ]
})
export class UserDashboardModule { }
