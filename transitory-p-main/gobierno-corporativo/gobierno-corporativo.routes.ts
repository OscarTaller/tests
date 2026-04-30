import { Routes } from "@angular/router";

export const GobiernoCorporativoRoutes: Routes = [
  {
    path: '',
    title: 'Gobierno Corporativo',
    data: { breadcrumb: 'Gobierno Corporativo' },
    loadComponent: () => import('./pages/gobierno-corporativo').then(m => m.gobiernoCorporativo)
  }
];