import { Component, inject, signal, OnInit } from '@angular/core';
import { User } from '../../services/user';  
import { UserType } from '../../types/userType'; 
@Component({
  selector: 'app-display-user',
  imports: [],
  templateUrl: './display-user.html',
  styleUrl: './display-user.css',
})

export class DisplayUser implements OnInit {

  userService = inject(User);
  users = signal<UserType[]>([]);

  ngOnInit(){
    this.userService.getUsers().subscribe(data=>{
      this.users.set(data);
    });
  }
}
