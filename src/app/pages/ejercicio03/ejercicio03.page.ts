import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit {

  n: number;

  constructor() { }

  ngOnInit() {
    this.n = 0;
  }
  
  incrementValue() {
    this.n++;
  }
  decrementValue() {
    this.n--;
  }

}
