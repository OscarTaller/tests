import { Component, signal } from '@angular/core';
import { CONCESIONARIOS_CTA } from '../../data/concesionarios.data';

@Component({
  selector: 'app-concesionarios-cta-banner',
  imports: [],
  templateUrl: './cta-banner.html',
  styleUrl: './cta-banner.css',
})
export class CtaBanner {
  readonly data = signal(CONCESIONARIOS_CTA);
}
