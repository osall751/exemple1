import { TestBed } from '@angular/core/testing';

import { GestionEtudiantsService } from './gestion-etudiants.service';

describe('GestionEtudiantsService', () => {
  let service: GestionEtudiantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionEtudiantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
