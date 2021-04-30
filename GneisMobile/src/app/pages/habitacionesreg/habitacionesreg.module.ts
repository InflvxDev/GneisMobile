import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitacionesregPageRoutingModule } from './habitacionesreg-routing.module';

import { HabitacionesregPage } from './habitacionesreg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitacionesregPageRoutingModule
  ],
  declarations: [HabitacionesregPage]
})
export class HabitacionesregPageModule {}
