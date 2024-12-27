import { Component, inject, input, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../core/service/auth.service';
@Component({
  selector: 'app-nav-bar',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    RouterLink,
  ],
  template: `
    <mat-toolbar color="#d7d7ff">
      @if (return) {
      <button mat-icon-button routerLink="/">
        <mat-icon>chevron_left</mat-icon>
      </button>
      }
      <span class="h1">{{ title }}</span>
      <span class="spaceur"></span>
      @if(auth){
      <button class="loggout" mat-fab extended (click)="logout()">
        Deconnexion
      </button>
      }
    </mat-toolbar>
  `,
  styles: `
  mat-toolbar{
    gap:1rem;
    background-color: rgb(215, 215, 255);
  }
  .loggout{
    background-color:coral;
  }
  button{
    color:white;
  }
  .spaceur{
    flex:1 1 0;
  }
  .h1{
    font-weight:bold;
  }
  button
  {
    background-color:rgb(133, 133, 255);
  }
  mat-icon{
    color:white;
  }
  @media(max-width:640px){
    mat-drawer{
      width:50%;
    }
  }

  `,
})
export class NavBarComponent {
  @Input() title = 'Mosali';
  private router = inject(Router);
  auth = inject(AuthService).isLoggedIn();
  @Input()
  return: boolean = false;
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
