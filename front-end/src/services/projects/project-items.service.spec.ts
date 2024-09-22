import { TestBed } from '@angular/core/testing';

import { ProjectItemsService } from './project-items.service';

describe('ProjectItemsService', () => {
  let service: ProjectItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
