import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionGestionIngresosComponent } from './accion-gestion-ingresos.component';

describe('AccionGestionIngresosComponent', () => {
  let component: AccionGestionIngresosComponent;
  let fixture: ComponentFixture<AccionGestionIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccionGestionIngresosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionGestionIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
