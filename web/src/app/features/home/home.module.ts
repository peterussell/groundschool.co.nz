import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home/home.page';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule { }
