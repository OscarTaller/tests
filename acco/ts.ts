// accordion.component.ts
import { Component, input, signal, computed, HostListener, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItem } from './accordion.model';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  // Signal Input: Recibe el modelo desde el padre
  data = input.required<AccordionItem>();

  // Estados locales (Signals)
  isOpen = signal<boolean>(false);
  
  // Inicializamos con un valor por defecto (Desktop) por si hay SSR
  screenWidth = signal<number>(1024);

  // Estados computados reactivos
  isMobile = computed(() => this.screenWidth() < 768); // Ajusta el breakpoint según necesites
  isCard = computed(() => this.data().variant === 'card');

  constructor() {
    // afterNextRender garantiza que ESTE bloque solo corra en el navegador (Browser)
    // Evita cualquier error de "window is not defined" en SSR (Server-Side Rendering)
    afterNextRender(() => {
      this.screenWidth.set(window.innerWidth);
    });
  }

  // Escuchamos el resize de la ventana
  @HostListener('window:resize', ['$event'])
  onResize() {
    // El typeof window previene errores si esto llega a dispararse fuera del navegador
    if (typeof window !== 'undefined') {
      this.screenWidth.set(window.innerWidth);
    }
  }

  toggle() {
    this.isOpen.update((open) => !open);
  }
}