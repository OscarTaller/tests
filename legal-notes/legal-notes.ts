import { Component, input } from '@angular/core';
import { LegalNote } from './legal-notes.model';
import { LEGAL_NOTES_PARA_TI } from './legal-notes.data';

@Component({
  selector: 'app-legal-notes',
  imports: [],
  templateUrl: './legal-notes.html',
  styleUrl: './legal-notes.css',
})
export class LegalNotes {
  readonly notes = input<LegalNote[]>(LEGAL_NOTES_PARA_TI);
}
