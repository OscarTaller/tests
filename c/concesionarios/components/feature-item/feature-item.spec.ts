import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureItem } from './feature-item';

describe('FeatureItem', () => {
  let component: FeatureItem;
  let fixture: ComponentFixture<FeatureItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureItem],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureItem);
    fixture.componentRef.setInput('icon', 'test');
    fixture.componentRef.setInput('title', 'Title');
    fixture.componentRef.setInput('description', 'Description');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
