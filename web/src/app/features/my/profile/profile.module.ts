import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfilePage } from './pages/profile/profile.page';

@NgModule({
  declarations: [
    UserProfilePage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserProfilePage
  ]
})
export class UserProfileModule { }
