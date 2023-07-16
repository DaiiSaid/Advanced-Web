import { TestBed } from '@angular/core/testing';

import { EnvironmentalConditionService } from './environmental-condition.service';

describe('EnvironmentalConditionService', () => {
  let service: EnvironmentalConditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentalConditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
