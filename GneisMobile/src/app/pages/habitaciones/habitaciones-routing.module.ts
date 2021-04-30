import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitacionesPage } from './habitaciones.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/habitaciones/registro',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HabitacionesPage,
    children: [
      {
        path: 'registro',
        loadChildren: () => import('../habitacionesreg/habitacionesreg.module').then(m => m.HabitacionesregPageModule)
      },
      {
        path: 'lista',
        loadChildren: () => import('../habitacioneslist/habitacioneslist.module').then(m => m.HabitacioneslistPageModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitacionesPageRoutingModule {}
