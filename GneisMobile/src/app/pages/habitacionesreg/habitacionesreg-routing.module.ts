import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitacionesregPage } from './habitacionesreg.page';

const routes: Routes = [
  {
    path: '',
    component: HabitacionesregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitacionesregPageRoutingModule {}
