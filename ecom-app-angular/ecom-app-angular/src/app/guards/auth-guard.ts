import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    console.log('🔐 AUTH GUARD →', state.url);

    // 1️⃣ AUTH FIABLE (attend Keycloak)
    const isLoggedIn = await this.keycloak.isLoggedIn();
    if (!isLoggedIn) {
      await this.router.navigate(['/']);
      return false;
    }

    // 2️⃣ RÔLES DIRECTEMENT DE KEYCLOAK (STABLE)
    const kc = this.keycloak.getKeycloakInstance();

    const userRoles: string[] =
      kc?.realmAccess?.roles || [];

    const requiredRoles: string[] =
      route.data?.['roles'] || [];

    // 3️⃣ AUCUN RÔLE REQUIS
    if (requiredRoles.length === 0) {
      return true;
    }

    // 4️⃣ VÉRIFICATION DES RÔLES
    const hasRole = requiredRoles.some(role =>
      userRoles.includes(role)
    );

    if (!hasRole) {
      await this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
