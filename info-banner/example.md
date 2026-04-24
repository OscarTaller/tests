```ts
//importación en el otro componente
import { Component } from '@angular/core';
import { InfoBannerComponent, InfoBannerConfig } from '../../shared/components/info-banner'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InfoBannerComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
  // Creas el objeto respetando la interfaz
  miBannerProteccion: InfoBannerConfig = {
    showMode: 'full', // Esto activará el case 'full' (con H2)
    overline: 'PROTECCIÓN',
    title: 'Tu dinero más seguro que nunca',
    description: 'Protección financiera total 24/7...'
  };

  miBannerSimple: InfoBannerConfig = {
    showMode: 'simple', // Esto activará el case 'simple' (sin H2)
    title: 'Solo un título directo',
    description: 'Descripción rápida sin sobretítulo.'
  };
}

//uso desde html
<app-info-banner [config]="miBannerProteccion"></app-info-banner>

<hr>

<app-info-banner [config]="miBannerSimple"></app-info-banner>


```