import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserType } from '../types/user-type';
import { DisplayUserType } from '../types/display-user';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  httpClient = inject(HttpClient);
  baseurl = 'https://api.escuelajs.co/api/v1';

  getUsers() {
    return this.httpClient.get<DisplayUserType[]>(`${this.baseurl}/users`);
  }

  addUser(user: UserType) {
    return this.httpClient.post<DisplayUserType>(`${this.baseurl}/users/`, user);
  }
}
