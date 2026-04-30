import { Component, signal } from '@angular/core';
import { CONCESIONARIOS_FEATURES } from '../../data/concesionarios.data';
import { FeatureItem } from '../feature-item/feature-item';

@Component({
  selector: 'app-concesionarios-features-grid',
  imports: [FeatureItem],
  templateUrl: './features-grid.html',
  styleUrl: './features-grid.css',
})
export class FeaturesGrid {
  readonly features = signal(CONCESIONARIOS_FEATURES);
}
