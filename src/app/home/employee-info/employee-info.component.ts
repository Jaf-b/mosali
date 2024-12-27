import { Component, input, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Employee } from '../../core/models/employee.model';

@Component({
  selector: 'app-employee-info',
  imports: [MatCardModule],
  template: `
    <div class="identity">
      <h2>
        {{ employee().fullname }}
      </h2>
      <span>
        {{
          employee().email +
            '  -   ' +
            employee().phone +
            '   sexe:   ' +
            employee().sexe
        }}
      </span>
    </div>
    <div class="adresse">
      <h3>Addresse:</h3>
      <span>{{
        employee().adress.street +
          ' - ' +
          employee().adress.city +
          ' - ' +
          employee().adress.country
      }}</span>
    </div>
    <div class="hobbie">
      @for (item of employee().hobbies; track $index) {
      <span>{{ 'passe temps N ' + ($index + 1) + ' : ' + item }}</span>
      }
    </div>
  `,
  styles: `
  .identity{
    display:flex;
    flex-direction:column;
  }
  .adresse{
    display:flex;
    align-items:center;
    gap:1rem;
  }
  .hobbie{
    display:flex;
    flex-direction:column;
    gap:1rem;
  }
  mat-card{
    background-color:white;
  }
  `,
})
export class EmployeeInfoComponent {
  employee = input.required<Employee>();
}
