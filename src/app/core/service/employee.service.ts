import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [];

  AddEmployee = (employee: Employee) => this.employees.push(employee);
  getEmployee = () => this.employees;
  getEmployeeWithId = (index: number) => this.employees[index];
  DeleteEmployee = (Index: number) => this.employees.splice(Index, 1);
  EditEmployee = (Index: number, e: Employee) => (this.employees[Index] = e);
}
