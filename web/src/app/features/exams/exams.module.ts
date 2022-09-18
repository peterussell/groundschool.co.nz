import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsPage } from './pages/exams/exams.page';

@NgModule({
  declarations: [
    ExamsPage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExamsPage
  ]
})
export class ExamsModule { }
