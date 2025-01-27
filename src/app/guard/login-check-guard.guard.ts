import { CanActivateFn } from '@angular/router';

export const loginCheckGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
