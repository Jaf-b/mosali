import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './core/service/auth.service';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Mosali - Home',
    loadComponent: () => import('./home/home.component'),
    canActivate: [() => inject(AuthService).isLoggedIn()],
  },

  {
    path: 'login',
    title: 'Mosali - Login',
    loadComponent: () => import('./login/login.component'),
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./info/info.component'),
    canActivate: [() => inject(AuthService).isLoggedIn()],
  },
  {
    path: 'registration',
    title: 'Mosali - Add Employee',
    loadComponent: () => import('./registration/registration.component'),
    canActivate: [() => inject(AuthService).isLoggedIn()],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
