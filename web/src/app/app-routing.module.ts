import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard,  } from '@auth0/auth0-angular';

import { ContactPage } from './features/contact/pages/contact/contact.page';
import { ExamsPage } from './features/exams/pages/exams/exams.page';
import { HomePage } from './features/home/pages/home/home.page';
import { LoginPage } from './features/login/pages/login/login.page';
import { NotFoundPage } from './features/not-found/pages/not-found/not-found.page';
import { UserBookmarksPage } from './features/my/bookmarks/pages/bookmarks/bookmarks.page';
import { UserDashboardPage } from './features/my/dashboard/pages/dashboard/dashboard.page';
import { UserPastExamsPage } from './features/my/past-exams/pages/past-exams/past-exams.page';
import { UserProfilePage } from './features/my/profile/pages/profile/profile.page';

const routes: Routes = [
  // Public routes
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'contact', component: ContactPage },
  { path: 'exams', component: ExamsPage },
  { path: 'login', component: LoginPage },

  // Protected routes
  { path: 'my', canActivate: [AuthGuard], children: [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'bookmarks', canActivateChild: [AuthGuard], component: UserBookmarksPage },
    { path: 'dashboard', canActivateChild: [AuthGuard], component: UserDashboardPage },
    { path: 'profile', canActivateChild: [AuthGuard], component: UserProfilePage },
    { path: 'past-exams', canActivateChild: [AuthGuard], component: UserPastExamsPage }
  ]},

  // Error/catchall routes
  { path: '404', component: NotFoundPage },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
