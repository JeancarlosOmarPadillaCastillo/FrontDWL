import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteRequisitosAgenteComponent } from './reporte-requisitos-agente.component';

describe('ReporteRequisitosAgenteComponent', () => {
  let component: ReporteRequisitosAgenteComponent;
  let fixture: ComponentFixture<ReporteRequisitosAgenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteRequisitosAgenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteRequisitosAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
