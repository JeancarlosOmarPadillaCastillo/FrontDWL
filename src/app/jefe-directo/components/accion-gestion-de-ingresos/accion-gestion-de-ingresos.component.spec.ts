import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionGestionDeIngresosComponent } from './accion-gestion-de-ingresos.component';

describe('AccionGestionDeIngresosComponent', () => {
  let component: AccionGestionDeIngresosComponent;
  let fixture: ComponentFixture<AccionGestionDeIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccionGestionDeIngresosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionGestionDeIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
