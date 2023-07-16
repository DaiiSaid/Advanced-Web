import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalConditionComponent } from './environmental-condition.component';

describe('EnvironmentalConditionComponent', () => {
  let component: EnvironmentalConditionComponent;
  let fixture: ComponentFixture<EnvironmentalConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentalConditionComponent]
    });
    fixture = TestBed.createComponent(EnvironmentalConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
