import { Component, signal } from '@angular/core';
import { CONCESIONARIOS_BREADCRUMBS } from '../../data/concesionarios.data';

@Component({
  selector: 'app-concesionarios-breadcrumbs',
  imports: [],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  readonly items = signal(CONCESIONARIOS_BREADCRUMBS);
}
