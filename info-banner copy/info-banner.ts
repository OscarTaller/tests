import { Component, input } from '@angular/core';
import { InfoBannerConfig, TextSegment } from './info-banner.model';

@Component({
  selector: 'app-info-banner',
  imports: [],
  templateUrl: './info-banner.html',
  styleUrl: './info-banner.css',
})
export class InfoBanner {
  readonly config = input.required<InfoBannerConfig>();

  toSegment(value: string | TextSegment): TextSegment {
    return typeof value === 'string' ? { text: value } : value;
  }
}
