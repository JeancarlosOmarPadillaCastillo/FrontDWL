import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudHabitacionComponent } from './solicitud-habitacion.component';

describe('SolicitudHabitacionComponent', () => {
  let component: SolicitudHabitacionComponent;
  let fixture: ComponentFixture<SolicitudHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudHabitacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
