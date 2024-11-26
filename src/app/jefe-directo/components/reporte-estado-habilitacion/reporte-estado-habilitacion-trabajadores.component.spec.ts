import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEstadoHabilitacionTrabajadoresComponent } from './reporte-estado-habilitacion-trabajadores.component';

describe('ReporteEstadoHabilitacionTrabajadoresComponent', () => {
  let component: ReporteEstadoHabilitacionTrabajadoresComponent;
  let fixture: ComponentFixture<ReporteEstadoHabilitacionTrabajadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteEstadoHabilitacionTrabajadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteEstadoHabilitacionTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
