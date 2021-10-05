import { TestBed } from '@angular/core/testing';

import { GetTodayCasesService } from './get-today-cases.service';

describe('GetTodayCasesService', () => {
  let service: GetTodayCasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTodayCasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
