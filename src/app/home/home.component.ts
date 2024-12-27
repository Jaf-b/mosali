import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, ListEmployeeComponent],
  template: `
    <app-nav-bar></app-nav-bar>
    <app-list-employee></app-list-employee>
  `,
  styles: ``,
})
export default class HomeComponent {}
