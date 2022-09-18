import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  handleSignUp() {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }

  handleLogIn() {
    this.auth.loginWithRedirect();
  }

  handleLogOut() {
    this.auth.logout({ returnTo: document.location.origin });
  }
}
