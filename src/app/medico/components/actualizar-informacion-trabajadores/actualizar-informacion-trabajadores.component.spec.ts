import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarInformacionTrabajadoresComponent } from './actualizar-informacion-trabajadores.component';

describe('ActualizarInformacionTrabajadoresComponent', () => {
  let component: ActualizarInformacionTrabajadoresComponent;
  let fixture: ComponentFixture<ActualizarInformacionTrabajadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarInformacionTrabajadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarInformacionTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
