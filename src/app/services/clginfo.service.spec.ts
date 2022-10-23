import { TestBed } from '@angular/core/testing';

import { ClginfoService } from './clginfo.service';

describe('ClginfoService', () => {
  let service: ClginfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClginfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
