import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesPage } from './clientes.page';
import { ClientelistPageModule } from '../clientelist/clientelist.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/clientes/registro',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ClientesPage,
    children: [
      {
        path: 'registro',
        loadChildren: () => import('../clientereg/clientereg.module').then(m => m.ClienteregPageModule)
      },
      {
        path: 'lista',
        loadChildren: () => import('../clientelist/clientelist.module').then(m => m.ClientelistPageModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesPageRoutingModule {}
