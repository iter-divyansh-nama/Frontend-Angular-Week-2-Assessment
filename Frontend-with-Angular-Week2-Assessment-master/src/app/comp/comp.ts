import { Component } from '@angular/core';
import { form } from '@angular/forms/signals';
import { FormComponent } from './form-component/form-component';
import { User } from '../user/user';

@Component({
  selector: 'app-comp',
  imports: [FormComponent,User],
  templateUrl: './comp.html',
  styleUrl: './comp.css',
})
export class Comp {}
