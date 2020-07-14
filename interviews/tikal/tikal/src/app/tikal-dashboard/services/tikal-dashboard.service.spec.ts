import { TestBed } from '@angular/core/testing';

import { TikalDashboardService } from './tikal-dashboard.service';

describe('TikalDashboardService', () => {
  let service: TikalDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TikalDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
