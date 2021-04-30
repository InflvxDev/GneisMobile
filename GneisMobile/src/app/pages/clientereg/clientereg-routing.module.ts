import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteregPage } from './clientereg.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteregPageRoutingModule {}
