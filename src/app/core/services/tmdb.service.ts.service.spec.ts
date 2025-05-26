import { TestBed } from '@angular/core/testing';

import { TmdbServiceTsService } from './tmdb.service.ts.service';

describe('TmdbServiceTsService', () => {
  let service: TmdbServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
