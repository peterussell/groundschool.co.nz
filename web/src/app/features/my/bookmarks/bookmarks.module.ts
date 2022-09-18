import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBookmarksPage } from './pages/bookmarks/bookmarks.page';

@NgModule({
  declarations: [
    UserBookmarksPage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserBookmarksPage
  ]
})
export class UserBookmarksModule { }
