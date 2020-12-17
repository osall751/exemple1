import { TestBed } from '@angular/core/testing';

import { GestionSessionsService } from './gestion-sessions.service';

describe('GestionSessionsService', () => {
  let service: GestionSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
