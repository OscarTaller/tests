import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gobiernoCorporativo } from './gobierno-corporativo';

describe('gobiernoCorporativo', () => {
  let component: gobiernoCorporativo;
  let fixture: ComponentFixture<gobiernoCorporativo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [gobiernoCorporativo],
    }).compileComponents();

    fixture = TestBed.createComponent(gobiernoCorporativo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
