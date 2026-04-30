import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CONCESIONARIOS_HERO_DATA } from '../../data/concesionarios.data';

@Component({
  selector: 'app-concesionarios-hero',
  imports: [FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly data = signal(CONCESIONARIOS_HERO_DATA);
  readonly username = signal('');
  readonly password = signal('');

  onSubmit() {
    // Hook para conectar al backend en el futuro
  }
}
