import { TestBed } from '@angular/core/testing';

import { AdminFilesService } from './admin-files.service';

describe('AdminFilesService', () => {
  let service: AdminFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
