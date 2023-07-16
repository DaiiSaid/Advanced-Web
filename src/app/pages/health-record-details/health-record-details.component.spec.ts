import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthRecordDetailsComponent } from './health-record-details.component';

describe('HealthRecordDetailsComponent', () => {
  let component: HealthRecordDetailsComponent;
  let fixture: ComponentFixture<HealthRecordDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthRecordDetailsComponent]
    });
    fixture = TestBed.createComponent(HealthRecordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
