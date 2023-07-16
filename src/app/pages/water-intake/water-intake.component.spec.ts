import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterIntakeComponent } from './water-intake.component';

describe('WaterIntakeComponent', () => {
  let component: WaterIntakeComponent;
  let fixture: ComponentFixture<WaterIntakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterIntakeComponent]
    });
    fixture = TestBed.createComponent(WaterIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
