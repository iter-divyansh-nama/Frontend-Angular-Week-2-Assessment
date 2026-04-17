
import { Component, inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../services/service';


@Component({
  selector: 'app-user',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {


  api = inject(HttpService);
  users: any[] = [];

  ngOnInit() {
    this.api.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      }
    });
  }
}