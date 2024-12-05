import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../table/table.component";
import { NonNullableFormBuilder, ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

interface Person {
  key: string;
  username: string;
  phoneNumber: number;
  gmail: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    NzDividerModule,
  
    NzCheckboxModule,
    NzTableModule,
    NzGridModule,
    FormsModule,
    NzTimePickerModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzSelectModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,

  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class FormPageComponent implements OnInit {
  validateForm!: FormGroup; 
  validateForms!: FormGroup; 
  time: string | null = null; 
  date: Date | null = null; 
  listdata: any[] = []; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      phoneNumberPrefix: ['+94', [Validators.required]],
      phoneNumber: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gmail: [null, [Validators.required, Validators.email]],
      remember: [false],
    });


    this.validateForms = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false],
    });
  }

  public addItem(): void {

    if (this.validateForm.valid) {
      this.listdata.push(this.validateForm.value);
      console.log('Submitted data:', this.validateForm.value);
      this.validateForm.reset(); 
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          (control as any).markAsTouched(); 
        }
      });
    }
  }


  onChange(result: Date): void {
    console.log('Selected date: ', result);
  }


  onsubmit(): void {
    if (this.validateForms.valid) {
      console.log('Login Form data:', this.validateForms.value);
    }
  }
}
