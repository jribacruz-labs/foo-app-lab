import { TestBed } from '@angular/core/testing';

import { FooFilterService } from './foo-filter.service';

describe('FooFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FooFilterService = TestBed.get(FooFilterService);
    expect(service).toBeTruthy();
  });
});
