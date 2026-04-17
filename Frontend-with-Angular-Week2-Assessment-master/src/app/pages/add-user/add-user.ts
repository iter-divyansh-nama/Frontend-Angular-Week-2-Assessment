import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../services/user'; 

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})

export class AddUser {

  userService = inject(User);

  userForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)]),
    avatar: new FormControl('',Validators.required)
  });

  submit(){
    if(this.userForm.invalid) return;

    this.userService.addUser(this.userForm.value as any)
      .subscribe(res=>{
        console.log("User Added Successfully", res);
        this.userForm.reset();
      });
  }
}
