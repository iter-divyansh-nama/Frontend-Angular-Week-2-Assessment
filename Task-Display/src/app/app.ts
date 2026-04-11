import { Component } from '@angular/core';
import { Http } from '../http/http';

@Component({
  selector: 'app-root',
  imports: [Http],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
