import { TestBed } from '@angular/core/testing';

import { NewssourcesService } from './newssources.service';

describe('NewssourcesService', () => {
  let service: NewssourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewssourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
