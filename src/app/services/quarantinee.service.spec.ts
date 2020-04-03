import { TestBed } from '@angular/core/testing';

import { QuarantineeService } from './quarantinee.service';

describe('QuarantineeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuarantineeService = TestBed.get(QuarantineeService);
    expect(service).toBeTruthy();
  });
});
