import { routes } from '../../app.routes';
import { inject, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  constructor() {}
  isLoggedIn = () => {
    if (localStorage.getItem('logged')) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  };
}
