import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteObservacionesSubsanaciones } from './reporte-observaciones-subsanaciones';

describe('ReporteObservacionesSubsanacionesComponentComponent', () => {
  let component: ReporteObservacionesSubsanaciones;
  let fixture: ComponentFixture<ReporteObservacionesSubsanaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteObservacionesSubsanaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteObservacionesSubsanaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
