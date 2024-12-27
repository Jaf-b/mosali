import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-info',
  imports: [NavBarComponent],
  template: `
    <app-nav-bar [return]="true"></app-nav-bar>
  `,
  styles: ``
})
export default class InfoComponent {

}
