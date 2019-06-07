import { TestBed } from '@angular/core/testing';

import { NgxLazyLoadService } from './ngx-lazy-load.service';

describe('NgxLazyLoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLazyLoadService = TestBed.get(NgxLazyLoadService);
    expect(service).toBeTruthy();
  });
});
