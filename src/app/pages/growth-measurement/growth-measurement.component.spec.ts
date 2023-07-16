import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthMeasurementComponent } from './growth-measurement.component';

describe('GrowthMeasurementComponent', () => {
  let component: GrowthMeasurementComponent;
  let fixture: ComponentFixture<GrowthMeasurementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrowthMeasurementComponent]
    });
    fixture = TestBed.createComponent(GrowthMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
