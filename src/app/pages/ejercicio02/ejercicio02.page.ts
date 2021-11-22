import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  value: boolean;

  constructor() { }

  ngOnInit() {
    this.value = false;
  }

  muestraNombre (valor: boolean){
    this.value = !valor;
  }

}
