import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosAgenteSupervisadoComponent } from './requisitos-agente-supervisado.component';

describe('RequisitosAgenteSupervisadoComponent', () => {
  let component: RequisitosAgenteSupervisadoComponent;
  let fixture: ComponentFixture<RequisitosAgenteSupervisadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequisitosAgenteSupervisadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitosAgenteSupervisadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
