import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdUpdateComponent } from './bird-update.component';

describe('BirdUpdateComponent', () => {
  let component: BirdUpdateComponent;
  let fixture: ComponentFixture<BirdUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirdUpdateComponent]
    });
    fixture = TestBed.createComponent(BirdUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
