import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';

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

    // Auth0
    AuthModule.forRoot({
      domain: 'dev-dd6ko7nw.us.auth0.com',
      clientId: '12HCOp9x8Nks1gYxPoY3EnSk7CVGn89h'
    }),

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
