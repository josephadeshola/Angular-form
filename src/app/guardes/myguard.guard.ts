import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const myguardGuard: CanActivateFn = (route, state) => {
  let routes=inject(Router);
  return localStorage["current_user"] ? true : routes.navigate(['/']);
};
