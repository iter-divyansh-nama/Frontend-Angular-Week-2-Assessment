import { HttpService } from './../../services/http';
import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserType } from '../../types/user-type';

@Component({
  selector: 'app-comp1',
  imports: [ReactiveFormsModule],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
})
export class Comp1 {
  httpService = inject(HttpService);
  submitted = false;
  loading = false;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    avatar: new FormControl('', [Validators.required]),
  });

  handleSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) return;

    const newUser: UserType = {
      name: this.userForm.value.name!,
      email: this.userForm.value.email!,
      password: this.userForm.value.password!,
      avatar: this.userForm.value.avatar!,
    };

    this.loading = true;
    this.httpService.addUser(newUser).subscribe({
      next: (data) => {
        console.log('User added:', data);
        this.userForm.reset();
        this.submitted = false;
        this.loading = false;
      },
      error: (err) => {
        console.log('Error adding user:', err);
        this.loading = false;
      },
      complete: () => {
        console.log('Add user request completed');
      },
    });
  }
}
