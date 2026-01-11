import {Component, OnInit, signal} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {KeycloakProfile} from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App  implements OnInit {
  protected readonly title = signal('ecom-app-angular');
  public profile! : KeycloakProfile;
  constructor(public keycloakService : KeycloakService) {
  }


  ngOnInit() {
    if(this.keycloakService.isLoggedIn()){
      this.keycloakService.loadUserProfile().then(profile=>{
        this.profile=profile;
      });
    }
  }
  async handleLogin() {
    await this.keycloakService.login({
      redirectUri: window.location.origin
    });
  }

  handleLogout() {
    this.keycloakService.logout(window.location.origin);
  }

  getUsername(): string {
    if (!this.profile) return 'Guest';
    return this.profile.username || 'User';
  }
}
