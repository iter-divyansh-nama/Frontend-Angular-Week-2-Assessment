
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient);

  baseurl = 'https://api.escuelajs.co/api/v1/users';

  getUsers() {
    return this.http.get<any[]>(this.baseurl);
  }
}