import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promo-header',
  templateUrl: './promo-header.component.html',
  styleUrls: ['./promo-header.component.css'] // o .scss
})
export class PromoHeaderComponent {
  // Con @Input() le decimos a Angular que estos valores vendrán de fuera
  @Input() overline: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}