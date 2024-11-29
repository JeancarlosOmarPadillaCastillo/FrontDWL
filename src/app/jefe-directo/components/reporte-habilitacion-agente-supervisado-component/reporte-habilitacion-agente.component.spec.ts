import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteHabilitacionAgenteComponent } from './reporte-habilitacion-agente.component';

describe('ReporteHabilitacionAgenteSupervisadoComponentComponent', () => {
  let component: ReporteHabilitacionAgenteComponent;
  let fixture: ComponentFixture<ReporteHabilitacionAgenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteHabilitacionAgenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteHabilitacionAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
