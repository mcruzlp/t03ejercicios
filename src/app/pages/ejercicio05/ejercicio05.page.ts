import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio05',
  templateUrl: './ejercicio05.page.html',
  styleUrls: ['./ejercicio05.page.scss'],
})
export class Ejercicio05Page implements OnInit {

  inputMin: number;
  inputMax: number;
  n: number;
  value: boolean;

  constructor() { }

  ngOnInit() {
    this.inputMin = 0;
    this.inputMax = 0;
  }

  generaAleatorio() {
    this.n = this.inputMin + Math.floor(Math.random() * (this.inputMax - this.inputMin + 1));
  }

}
