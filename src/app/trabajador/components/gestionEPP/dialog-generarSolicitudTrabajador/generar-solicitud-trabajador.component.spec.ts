import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarSolicitudTrabajadorComponent } from './generar-solicitud-trabajador.component';

describe('DialogEliminarComponent', () => {
  let component: GenerarSolicitudTrabajadorComponent;
  let fixture: ComponentFixture<GenerarSolicitudTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarSolicitudTrabajadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarSolicitudTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
