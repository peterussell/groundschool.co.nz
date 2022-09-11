import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPage } from './pages/login/login.page';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginPage
  ]
})
export class LoginModule { }
