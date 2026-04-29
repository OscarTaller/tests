


# 1. `download-button.component.scss` 


```scss
:host {
  display: inline-block;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0.75rem 1.5rem;
  
  
  background-color: transparent;
  color: #1e8449;
  border: 2px solid #1e8449;
  border-radius: 9999px;
  
  
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  
  
  outline: none;
  &:focus-visible {
    outline: 3px solid rgba(30, 132, 73, 0.4);
    outline-offset: 2px;
  }

  
  &:hover:not(:disabled) {
    background-color: #1e8449;
    color: #ffffff;
  }

  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border-color: #a0a0a0;
    color: #a0a0a0;
  }
}
```

### 2. `download-button.component.html`


```html
<button 
  type="button" 
  class="download-btn"
  [attr.aria-label]="ariaLabel()"
  (click)="onClick.emit()">
  
  <span class="btn-text">{{ label() }}</span>
  
  <svg 
    aria-hidden="true" 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2.5"
    stroke-linecap="round" 
    stroke-linejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path>
  </svg>
</button>
```

# uso

```typescript
import { Component } from '@angular/core';
import { DownloadButtonComponent } from './components/download-button/download-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DownloadButtonComponent],
  template: `
    <app-download-button 
      [label]="'Descargar Factura'" 
      [ariaLabel]="'Descargar factura en formato PDF'"
      (onClick)="handleDownload()" />
  `
})
export class AppComponent {
  handleDownload() {
    console.log('Iniciando descarga...');
  }
}
```
