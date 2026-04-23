// info-banner.component.ts

import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBannerConfig } from './info-banner.model';

@Component({
  selector: 'app-info-banner',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './info-banner.component.html',
  styleUrls: ['./info-banner.component.css']
})
export class InfoBannerComponent {
  
  config = input.required<InfoBannerConfig>();
}