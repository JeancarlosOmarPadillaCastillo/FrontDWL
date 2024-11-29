import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHistorialTrabajadorComponent } from './ver-historial-trabajador.component';

describe('VerHistorialTrabajadorComponent', () => {
  let component: VerHistorialTrabajadorComponent;
  let fixture: ComponentFixture<VerHistorialTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerHistorialTrabajadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerHistorialTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
