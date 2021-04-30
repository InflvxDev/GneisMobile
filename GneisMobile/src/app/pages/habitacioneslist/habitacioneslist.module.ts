import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitacioneslistPageRoutingModule } from './habitacioneslist-routing.module';

import { HabitacioneslistPage } from './habitacioneslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitacioneslistPageRoutingModule
  ],
  declarations: [HabitacioneslistPage]
})
export class HabitacioneslistPageModule {}
