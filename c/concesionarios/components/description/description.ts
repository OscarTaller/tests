import { Component, signal } from '@angular/core';
import { CONCESIONARIOS_DESCRIPTION } from '../../data/concesionarios.data';

@Component({
  selector: 'app-concesionarios-description',
  imports: [],
  templateUrl: './description.html',
  styleUrl: './description.css',
})
export class Description {
  readonly paragraphs = signal(CONCESIONARIOS_DESCRIPTION);
}
