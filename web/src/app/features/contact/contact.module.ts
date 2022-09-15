import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPage } from './pages/contact/contact.page';

@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactPage
  ]
})
export class ContactModule { }
