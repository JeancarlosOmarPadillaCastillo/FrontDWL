import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarHabitacionTrabajadoresComponent } from './consultar-habitacion-trabajadores.component';

describe('ConsultarHabitacionTrabajadoresComponent', () => {
  let component: ConsultarHabitacionTrabajadoresComponent;
  let fixture: ComponentFixture<ConsultarHabitacionTrabajadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarHabitacionTrabajadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarHabitacionTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
