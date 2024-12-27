import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../core/service/auth.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    NavBarComponent,
  ],
  template: `
    <app-nav-bar></app-nav-bar>
    <main>
      <h1>Bienvenu sur Mosali</h1>
      <p>Une Application de gestions des employées</p>
      <button mat-fab extended (click)="login()">Connectez-Vous</button>
    </main>
  `,
  styles: `
  main{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  `,
})
export default class LoginComponent {
  private router = inject(Router);

  loginService: AuthService = inject(AuthService);
  login() {
    localStorage.setItem('logged', 'true');
    this.router.navigate(['/']);
  }
}
