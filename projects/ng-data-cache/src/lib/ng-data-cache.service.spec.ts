import { TestBed } from '@angular/core/testing';

import { NgDataCacheService } from './ng-data-cache.service';

describe('NgDataCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDataCacheService = TestBed.get(NgDataCacheService);
    expect(service).toBeTruthy();
  });
});
