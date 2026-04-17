
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: 'form-component.html',
  styleUrl: 'form-component.css'
})
export class FormComponent {

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    avatar: new FormControl('')
  });

  handleSubmit() {
    console.log(this.userForm.value);
  }
}