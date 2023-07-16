import { TestBed } from '@angular/core/testing';

import { GrowthMeasurementService } from './growth-measurement.service';

describe('GrowthMeasurementService', () => {
  let service: GrowthMeasurementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrowthMeasurementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
