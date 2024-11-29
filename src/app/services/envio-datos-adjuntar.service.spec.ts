import { TestBed } from '@angular/core/testing';

import { EnvioDatosAdjuntarService } from './envio-datos-adjuntar.service';

describe('EnvioDatosAdjuntarService', () => {
  let service: EnvioDatosAdjuntarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioDatosAdjuntarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
