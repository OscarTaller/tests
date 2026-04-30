import { Component } from '@angular/core';
import { LIST_DATA } from '../../data/list.data';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  public secciones: any[] = LIST_DATA;
}
