import { Router } from '@angular/router';
import { Employee } from './../core/models/employee.model';
import { Component, inject, input, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { EmployeeService } from '../core/service/employee.service';
import { EmployeeInfoComponent } from '../home/employee-info/employee-info.component';
import { MatDividerModule } from '@angular/material/divider';
import { Title } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-info',
  imports: [
    NavBarComponent,
    EmployeeInfoComponent,
    MatDividerModule,
    MatButtonModule,
  ],
  template: `
    <app-nav-bar
      [return]="true"
      [title]="employee.fullname ? employee.fullname : ''"
    ></app-nav-bar>
    <div class="flex flex-col container">
      <app-employee-info [employee]="employee"></app-employee-info>
      <br />
      <mat-divider></mat-divider>
    </div>
    <div class="action">
      <button mat-fab extended (click)="editEmployee(id(), employee)">
        Modifier
      </button>
      <button class="warn" mat-fab extended (click)="deleteEmployee(id())">
        Supprimer
      </button>
    </div>
  `,
  styles: `
  .container{
    margin-top:10px;
  }
  .warn{
    color:white;
    background-color:red;
  }
  .action{
    margin-top:10px;
    width:80%;
    display:flex;
    gap:1rem;
    justify-content:end;
  }
  mat-divider{
    width:60%;
  }
  `,
})
export default class InfoComponent implements OnInit {
  id = input('');
  employee!: Employee;
  private router: Router = inject(Router);
  private es = inject(EmployeeService);
  private title = inject(Title);

  ngOnInit(): void {
    this.employee = this.es.getEmployeeWithId(Number(this.id()));
    if (!this.employee) {
      this.router.navigate(['/']);
    } else {
      this.title.setTitle(`${this.employee.fullname}-Mosali`);
    }
  }
  editEmployee(id: string, employee: Employee) {
    employee.id = id;
    this.router.navigate(['/registration'], {
      state: employee,
    });
  }

  deleteEmployee(index: string) {
    this.es.DeleteEmployee(Number(index));
    this.router.navigate(['/']);
  }
}
