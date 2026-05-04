import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItem } from './timeline.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  data = input.required<TimelineItem>();
}