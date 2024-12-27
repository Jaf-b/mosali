import { Employee } from './../../core/models/employee.model';
import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../core/service/employee.service';
import { EmployeeInfoComponent } from '../employee-info/employee-info.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-list-employee',
  imports: [MatButtonModule, RouterLink, EmployeeInfoComponent, MatCardModule],
  template: `
    <div class="container">
      <div>
        <h3>Mes employés</h3>
        <button mat-fab extended routerLink="/registration">
          Nouvel employés
        </button>
      </div>
    </div>
    @for (item of Employee; track $index) {
    <a [routerLink]="'/details/' + $index">
      <mat-card>
        <mat-card-content>
          <app-employee-info [employee]="item" />
        </mat-card-content>
      </mat-card>
    </a>
    }@empty {
    <p>
      Oups! pas encore d'employés à afficher <br />
      commencer par ajouter un employé
    </p>
    }
    <br />
    <br />
  `,
  styles: `

    .container{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    div{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:50px;
    width:80%;
    gap:5rem;
  }
  }
  p{
    text-align:center
  }
  a{
    text-decoration:none;
    color:black;
    margin-top:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
  }
  mat-card{
    background-color:white;
  }

  `,
})
export class ListEmployeeComponent {
  private es = inject(EmployeeService);
  Employee = this.es.getEmployee();
}
