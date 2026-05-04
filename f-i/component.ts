import { Component, input, model, computed } from '@angular/core';
import { FieldInputType } from './field-input.model';

@Component({
  selector: 'app-field-input',
  standalone: true,
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss']
})
export class FieldInputComponent {
  value = model<string>('');
  
  label = input<string>('');
  type = input<FieldInputType>('text');
  placeholder = input<string>('');
  disabled = input<boolean>(false);
  readOnly = input<boolean>(false);
  
  showHint = input<boolean>(true);
  hintText = input<string>('');
  errorText = input<string>('');
  hasError = input<boolean>(false);
  
  inputId = input<string>(`field-input-${Math.random().toString(36).substring(2, 11)}`);

  ariaDescribedBy = computed(() => {
    if (this.hasError() && this.errorText()) {
      return `${this.inputId()}-error`;
    }
    if (this.showHint() && this.hintText()) {
      return `${this.inputId()}-hint`;
    }
    return null;
  });

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }
}