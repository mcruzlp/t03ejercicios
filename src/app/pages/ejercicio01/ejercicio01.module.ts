import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio01Page } from './ejercicio01.page';

import { Ejercicio01PageRoutingModule } from './ejercicio01-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio01PageRoutingModule
  ],
  declarations: [Ejercicio01Page]
})
export class Ejercicio01PageModule {}
