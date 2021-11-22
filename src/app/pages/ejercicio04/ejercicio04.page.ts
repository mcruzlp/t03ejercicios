import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio04',
  templateUrl: './ejercicio04.page.html',
  styleUrls: ['./ejercicio04.page.scss'],
})
export class Ejercicio04Page implements OnInit {

  name: string;
  value: boolean;
  inputName: string;

  constructor() { }

  ngOnInit() {
  }

  muestraNombre (valor: boolean){
    this.value = valor;
  }

  saluda() {
    this.name = this.inputName;
    this.inputName = null; // limpia el input
  }

}
