import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
],
  template: `
  <router-outlet/>

  `,
  styles: [`
mat-divider{
  width:3rem;
}

    `],
})
export class AppComponent {
  title = 'My First App with Angular';
  navigate : boolean = false;



}
