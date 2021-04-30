import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientelistPage } from './clientelist.page';

const routes: Routes = [
  {
    path: '',
    component: ClientelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientelistPageRoutingModule {}
