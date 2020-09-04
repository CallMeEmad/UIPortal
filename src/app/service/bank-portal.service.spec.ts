import { TestBed } from '@angular/core/testing';

import { BankPortalService } from './bank-portal.service';

describe('BankPortalService', () => {
  let service: BankPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
