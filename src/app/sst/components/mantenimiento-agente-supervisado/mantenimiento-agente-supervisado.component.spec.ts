import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoAgenteSupervisadoComponent } from './mantenimiento-agente-supervisado.component';

describe('MantenimientoAgenteSupervisadoComponent', () => {
  let component: MantenimientoAgenteSupervisadoComponent;
  let fixture: ComponentFixture<MantenimientoAgenteSupervisadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoAgenteSupervisadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoAgenteSupervisadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
