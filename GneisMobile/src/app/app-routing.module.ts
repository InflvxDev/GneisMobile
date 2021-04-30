import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'habitaciones',
    loadChildren: () => import('./pages/habitaciones/habitaciones.module').then( m => m.HabitacionesPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'habitacionesreg',
    loadChildren: () => import('./pages/habitacionesreg/habitacionesreg.module').then( m => m.HabitacionesregPageModule)
  },
  {
    path: 'habitacioneslist',
    loadChildren: () => import('./pages/habitacioneslist/habitacioneslist.module').then( m => m.HabitacioneslistPageModule)
  },
  {
    path: 'clientelist',
    loadChildren: () => import('./pages/clientelist/clientelist.module').then( m => m.ClientelistPageModule)
  },
  {
    path: 'clientereg',
    loadChildren: () => import('./pages/clientereg/clientereg.module').then( m => m.ClienteregPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
