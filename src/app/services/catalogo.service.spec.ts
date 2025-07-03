import { TestBed } from '@angular/core/testing';


import { CatalogoService } from './catalogo.service';

describe('CatalogoService', () => {
  let service: CatalogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoService);
  });

  it('Debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });
});
