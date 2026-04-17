import { Component } from '@angular/core';
import { AddUser } from '../../pages/add-user/add-user';
import { DisplayUser } from '../../pages/display-user/display-user';

@Component({
  selector: 'app-main-layout',
  imports: [AddUser, DisplayUser],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}


