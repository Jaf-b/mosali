import { Component, inject } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { Employee } from '../core/models/employee.model';
import { EmployeeService } from '../core/service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [
    NavBarComponent,
    MatFormFieldModule,
    MatInput,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule,
    CommonModule,
  ],
  template: `
    <app-nav-bar [return]="true" [title]="'Add Employee'"></app-nav-bar>
    <div class="container">
      <form [formGroup]="employeeForm" (ngSubmit)="submit()">
        @let controls = employeeForm.controls;
        <div class="identity">
          <h1>Identity</h1>
          <mat-form-field appearance="outline">
            <mat-label>FullName</mat-label>
            <input
              type="text"
              formControlName="fullname"
              matInput
              placeholder="ex:Jafred Bukulu"
            />
            @if(controls.fullname.hasError('required')){
            <mat-error> Le nom est obligatiore </mat-error>
            } @else if(controls.fullname.hasError("minlength")){
            <mat-error> le nom doit avoir au minimum 8 lettre </mat-error>
            }
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Email</mat-label>
            <input
              type="email"
              formControlName="email"
              matInput
              placeholder="ex:Jafred@gmail.com"
            />
            @if(controls.email.hasError('required')){
            <mat-error> L'adresse email est obligatiore </mat-error>
            } @if(controls.email.hasError('email')){
            <mat-error>email est incorrect </mat-error>
            }
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Phone Number</mat-label>
            <input
              type="text"
              formControlName="phone"
              matInput
              placeholder="ex:85542854"
            />
            @if(controls.phone.hasError('required')){
            <mat-error> Le numero de téléphone est obligatiore </mat-error>
            } @else if(controls.phone.hasError('maxlength')){
            <mat-error>maximum 12 chiffre </mat-error>
            } @else if(controls.phone.hasError('minlength')){
            <mat-error> minimum 9 chiffre </mat-error>
            } @else if(controls.phone.hasError('pattern')){
            <mat-error>veuillez saisir que de chiffre</mat-error>
            }
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>sexe</mat-label>
            <mat-select formControlName="sexe">
              <mat-option value="">selectionner un Sexe</mat-option>
              <mat-option value="M">Masculin</mat-option>
              <mat-option value="F">Féminin</mat-option>
            </mat-select>
            @if(controls.sexe.hasError('required')){
            <mat-error>le sexe est obligatiore</mat-error>
            }
          </mat-form-field>
          <mat-divider></mat-divider>
        </div>
        <div class="div" [formGroup]="employeeForm.controls.adress">
          <h1>Adress</h1>
          @let AddresseControls = employeeForm.controls.adress.controls;
          <mat-form-field appearance="outline">
            <mat-label>street</mat-label>
            <input
              type="text"
              formControlName="street"
              matInput
              placeholder="ex:12 ème rue"
            />
            @if(AddresseControls.street.hasError('required')){
            <mat-error>l'avenue est obligatiore</mat-error>
            }
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>city</mat-label>
            <input
              type="text"
              formControlName="city"
              matInput
              placeholder="ex:Bukavu"
            />
            @if(AddresseControls.city.hasError('required')){
            <mat-error>la ville est obligatiore</mat-error>
            }
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>State</mat-label>
            <input
              type="text"
              formControlName="state"
              matInput
              placeholder="ex:Sud-Kivu"
            />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Country</mat-label>
            <input
              type="text"
              formControlName="country"
              matInput
              placeholder="ex:RDC"
            />
            @if(AddresseControls.country.hasError('required')){
            <mat-error>le pays est obligatiore</mat-error>
            }
          </mat-form-field>
          <mat-divider></mat-divider>
        </div>
        <div class="hobbie" formArrayName="hobbies">
          <h2>Hobbies</h2>
          @for (hobby of employeeForm.controls.hobbies.controls; track $index) {
          <div>
            <mat-form-field appearance="outline">
              <mat-label>hobby</mat-label>
              <input type="text" matInput [formControlName]="$index" />
              @if(hobby.hasError('required')){
              <mat-error>le passe temps est obligatiore</mat-error>
              }
            </mat-form-field>
            @if($index){
            <button
              type="button"
              class="warn"
              mat-fab
              extended
              (click)="removeHobbyForm($index)"
            >
              Remove
            </button>
            }
          </div>
          }
          <button
            class="primary"
            type="button"
            mat-fab
            extended
            (click)="addHobbyForm()"
            [disabled]=""
          >
            Add hobbies
          </button>
          <mat-divider></mat-divider>
        </div>
        <div class="btn_send">
          <button type="submit" mat-fab extended>Send</button>
        </div>
      </form>
    </div>
  `,
  styles: `
  .container{
    margin-left:auto;
    width:80%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .ClientInfo{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
  }
  form{
    width:100%;
    margin-top:20px;
    display:flex;
    justify-content:center;
    flex-direction:column;
  }
  .textarea{
  width:435px;
    height:150px;
  }
  button{
    width:200px;
  }
  .identity,.div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    gap:1rem;
    mat-form-field{
      width:60%;
    }
  }
  .hobbie{
    width:100%;
    display:flex;
    flex-direction:column;
    gap:1rem;

    div{
      position:relative;
      display:flex;
      width:80%;
      justify-content:start;
      gap:1rem;

      mat-form-field{
        width:65%;
      }
    }
   .warn{
    width:100px;
    background-color:red;
    color:white;
   }
  }
  .btn_send{
    margin-top:40px;
    width:80%;
    display:flex;
    justify-content:end;

  }
  mat-divider{
    width:60%;
  }
  `,
})
export default class RegistrationComponent {
  private fb = inject(FormBuilder);
  private es = inject(EmployeeService);
  private router = inject(Router);
  employeeForm = this.fb.nonNullable.group({
    fullname: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12),
        Validators.pattern(/^\d+$/),
      ],
    ],
    sexe: ['', [Validators.required]],
    adress: this.fb.nonNullable.group({
      street: ['', [Validators.required]],
      state: [''],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
    }),
    hobbies: this.fb.nonNullable.array([
      this.fb.nonNullable.control('', [Validators.required]),
    ]),
  });
  addHobbyForm() {
    const formControl = this.fb.nonNullable.control('');
    this.employeeForm.controls.hobbies.push(formControl);
  }
  removeHobbyForm(index: number) {
    this.employeeForm.controls.hobbies.removeAt(index);
  }
  submit() {
    if (this.employeeForm.valid) {
      const employee: Employee = {
        ...this.employeeForm.getRawValue(),
      };
      this.es.AddEmployee(employee);
      this.router.navigateByUrl('/');
    } else {
      this.employeeForm.markAllAsTouched;
      this.employeeForm.controls.adress.markAllAsTouched;
    }
  }
}
