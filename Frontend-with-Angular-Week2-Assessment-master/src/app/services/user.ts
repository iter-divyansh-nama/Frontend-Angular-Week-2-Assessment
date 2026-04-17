import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserType } from '../types/userType'; 


@Injectable({
  providedIn: 'root',
})



export class User {
  http = inject(HttpClient);

  baseUrl = 'https://api.escuelajs.co/api/v1/users';

  getUsers(){
    return this.http.get<UserType[]>(this.baseUrl);
  }

  addUser(user:UserType){
    return this.http.post(this.baseUrl,user);
  }
}







