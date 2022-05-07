import { TestBed } from '@angular/core/testing';

import { TicketBooikingService } from './ticket-booiking.service';

describe('TicketBooikingService', () => {
  let service: TicketBooikingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketBooikingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
