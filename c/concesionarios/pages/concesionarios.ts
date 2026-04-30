import { Component } from '@angular/core';
import { Hero } from '../components/hero/hero';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';
import { Description } from '../components/description/description';
import { FeaturesGrid } from '../components/features-grid/features-grid';
import { CtaBanner } from '../components/cta-banner/cta-banner';

@Component({
  selector: 'app-concesionarios',
  imports: [Hero, Breadcrumbs, Description, FeaturesGrid, CtaBanner],
  templateUrl: './concesionarios.html',
  styleUrl: './concesionarios.css',
})
export class Concesionarios {}
