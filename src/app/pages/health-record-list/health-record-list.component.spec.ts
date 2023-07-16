import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthRecordListComponent } from './health-record-list.component';

describe('HealthRecordListComponent', () => {
  let component: HealthRecordListComponent;
  let fixture: ComponentFixture<HealthRecordListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthRecordListComponent]
    });
    fixture = TestBed.createComponent(HealthRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
