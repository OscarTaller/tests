import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/pages/home-page';
import { NotFOund } from './features/not-found/not-found';
import { MainLayout } from './layouts/main-layout/pages/main-layout';
import { SecondaryLayout } from './layouts/secondary-layout/pages/secondary-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    data: { breadcrumb: 'Inicio' },
    children: [
      {
        path: '',
        component: HomePage,
        title: 'Inicio'
      },
      {
        path: 'prestamos',
        loadChildren: () => import('./features/prestamos/prestamos.routes').then(m => m.prestamosRoutes),
      },
      {
        path: 'tarjetas',
        loadChildren: () => import('./features/tarjeta/tarjeta.routes').then(m => m.tarjetaRoutes)
      },
      {
        path: 'gobierno-corporativo',
        loadChildren: () => import('./features/gobierno-corporativo/gobierno-corporativo.routes').then(m => m.GobiernoCorporativoRoutes)
      }
    ]
  },
  {
    path: 'cuentas-corrientes',
    component: SecondaryLayout,
    children: [
      { path: '', loadComponent: () => import('./features/pagina1/pagina1').then(m => m.Pagina1) }
    ]
  },
  {
    path: '**',
    component: NotFOund,
    title: 'Not Found'
  }
];
