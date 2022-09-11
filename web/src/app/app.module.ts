import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterModule } from './shared/modules/footer/footer.module';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { NavBarModule } from './shared/modules/nav-bar/nav-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Custom
    FooterModule,
    HomeModule,
    LoginModule,
    NavBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
