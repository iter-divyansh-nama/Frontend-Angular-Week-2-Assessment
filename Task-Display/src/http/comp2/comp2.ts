import { Component, inject, signal } from '@angular/core';
import { HttpService } from '../../services/http';
import { DisplayUserType } from '../../types/display-user';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
})
export class Comp2 {
  httpService = inject(HttpService);
  userData = signal<DisplayUserType[]>([]);
  loading = false;
  fetched = false;

  fetchUsers() {
    this.loading = true;
    this.httpService.getUsers().subscribe({
      next: (data) => {
        this.userData.set(data);
        this.loading = false;
        this.fetched = true;
      },
      error: (err) => {
        console.log('Error fetching users:', err);
        this.loading = false;
      },
      complete: () => {
        console.log('Get users request completed');
      },
    });
  }
}
