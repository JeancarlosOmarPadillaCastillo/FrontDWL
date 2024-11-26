import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoHabilitacionComponent } from './estado-habilitacion.component';

describe('EstadoHabilitacionComponent', () => {
  let component: EstadoHabilitacionComponent;
  let fixture: ComponentFixture<EstadoHabilitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoHabilitacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoHabilitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
