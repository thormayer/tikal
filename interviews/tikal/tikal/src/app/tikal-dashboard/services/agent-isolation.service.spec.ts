import { TestBed } from '@angular/core/testing';

import { AgentIsolationService } from './agent-isolation.service';

describe('AgentIsolationService', () => {
  let service: AgentIsolationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentIsolationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
