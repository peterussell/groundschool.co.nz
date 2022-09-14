import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './features/home/pages/home/home.page';
import { LoginPage } from './features/login/pages/login/login.page';
import { NotFoundPage } from './features/not-found/pages/not-found/not-found.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: '404',
    component: NotFoundPage
  },
  {
    path: '',
    component: HomePage,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
