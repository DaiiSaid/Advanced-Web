import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdSearchComponent } from './bird-search.component';

describe('BirdSearchComponent', () => {
  let component: BirdSearchComponent;
  let fixture: ComponentFixture<BirdSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirdSearchComponent]
    });
    fixture = TestBed.createComponent(BirdSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
