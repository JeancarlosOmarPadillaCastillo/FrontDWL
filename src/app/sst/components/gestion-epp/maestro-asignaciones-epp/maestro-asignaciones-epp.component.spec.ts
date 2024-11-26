import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroAsignacionesEppComponent } from './maestro-asignaciones-epp.component';

describe('MaestroAsignacionesEppComponent', () => {
  let component: MaestroAsignacionesEppComponent;
  let fixture: ComponentFixture<MaestroAsignacionesEppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaestroAsignacionesEppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaestroAsignacionesEppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
