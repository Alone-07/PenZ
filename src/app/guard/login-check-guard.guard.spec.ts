import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginCheckGuardGuard } from './login-check-guard.guard';

describe('loginCheckGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginCheckGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
