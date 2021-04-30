import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientelistPageRoutingModule } from './clientelist-routing.module';

import { ClientelistPage } from './clientelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientelistPageRoutingModule
  ],
  declarations: [ClientelistPage]
})
export class ClientelistPageModule {}
