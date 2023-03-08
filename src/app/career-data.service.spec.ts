import { TestBed } from '@angular/core/testing';

import { CareerDataService } from './career-data.service';

describe('CareerDataService', () => {
  let service: CareerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
