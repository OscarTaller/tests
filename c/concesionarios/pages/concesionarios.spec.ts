import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Concesionarios } from './concesionarios';

describe('Concesionarios', () => {
  let component: Concesionarios;
  let fixture: ComponentFixture<Concesionarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Concesionarios],
    }).compileComponents();

    fixture = TestBed.createComponent(Concesionarios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
