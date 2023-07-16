import { TestBed } from '@angular/core/testing';

import { FeedConsumptionService } from './feed-consumption.service';

describe('FeedConsumptionService', () => {
  let service: FeedConsumptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedConsumptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
