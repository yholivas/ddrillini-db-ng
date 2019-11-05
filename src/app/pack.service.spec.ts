import { TestBed } from '@angular/core/testing';

import { PackService } from './pack.service';

describe('PackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackService = TestBed.get(PackService);
    expect(service).toBeTruthy();
  });
});
