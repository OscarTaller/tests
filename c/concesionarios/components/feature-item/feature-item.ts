import { Component, input } from '@angular/core';

@Component({
  selector: 'app-concesionarios-feature-item',
  imports: [],
  templateUrl: './feature-item.html',
  styleUrl: './feature-item.css',
})
export class FeatureItem {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
