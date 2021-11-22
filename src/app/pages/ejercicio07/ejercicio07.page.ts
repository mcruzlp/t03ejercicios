import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  templateUrl: './ejercicio07.page.html',
  styleUrls: ['./ejercicio07.page.scss'],
})
export class Ejercicio07Page implements OnInit {

  inputPtas: number;
  inputEuros: number;


  constructor() { }

  ngOnInit() {
    this.inputPtas = 0;
    this.inputEuros = 0;
  }

  convierteEuros() {
    this.inputPtas = this.inputEuros*166.386;
  }

  conviertePtas() {
    this.inputEuros = this.inputPtas/166.386;
  }

}
