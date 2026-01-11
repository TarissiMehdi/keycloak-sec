import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { KeycloakService } from 'keycloak-angular';

import { AuthGuard } from './auth-guard';

// Mock pour KeycloakService
class MockKeycloakService {
  // Ajoutez ici les méthodes dont vous avez besoin pour les tests
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let keycloakService: KeycloakService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: KeycloakService, useClass: MockKeycloakService }
      ]
    });

    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    keycloakService = TestBed.inject(KeycloakService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  // Ajoutez vos tests spécifiques ici
  describe('isAccessAllowed', () => {
    it('should return false and redirect to home when not authenticated', async () => {
      // Arrange
      const routeSnapshot = {} as any;
      const stateSnapshot = { url: '/protected' } as any;
      spyOn(router, 'navigate');

      // Simuler que l'utilisateur n'est pas authentifié
      // (vous devrez ajuster cela en fonction de votre implémentation)

      // Act
      const result = await guard.isAccessAllowed(routeSnapshot, stateSnapshot);

      // Assert
      expect(result).toBeFalse();
      expect(router.navigate).toHaveBeenCalledWith(['/']);
    });

    // Ajoutez d'autres tests pour les cas authentifiés, avec/sans rôles, etc.
  });
});
