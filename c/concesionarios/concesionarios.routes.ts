import { Routes } from "@angular/router";

export const ConcesionariosRoutes: Routes = [
  {
    path: '',
    title: 'Concesionarios',
    data: { breadcrumb: 'Concesionarios' },
    loadComponent: () => import('./pages/concesionarios').then(m => m.Concesionarios)
  }
];
