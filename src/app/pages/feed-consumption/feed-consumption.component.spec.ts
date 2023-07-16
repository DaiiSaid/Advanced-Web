import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedConsumptionComponent } from './feed-consumption.component';

describe('FeedConsumptionComponent', () => {
  let component: FeedConsumptionComponent;
  let fixture: ComponentFixture<FeedConsumptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedConsumptionComponent]
    });
    fixture = TestBed.createComponent(FeedConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
