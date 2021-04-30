import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteregPageRoutingModule } from './clientereg-routing.module';

import { ClienteregPage } from './clientereg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteregPageRoutingModule
  ],
  declarations: [ClienteregPage]
})
export class ClienteregPageModule {}
