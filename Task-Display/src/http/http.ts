import { Component } from '@angular/core';
import { Comp1 } from './comp1/comp1';
import { Comp2 } from './comp2/comp2';

@Component({
  selector: 'app-http',
  imports: [Comp1, Comp2],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http {}
