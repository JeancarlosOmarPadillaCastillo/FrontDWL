import { TestBed } from '@angular/core/testing';

import { EnvioDeDatosService } from './envio-de-datos.service';

describe('EnvioDeDatosService', () => {
  let service: EnvioDeDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioDeDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
