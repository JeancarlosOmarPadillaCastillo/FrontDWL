import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeIngresosComponent } from './gestion-de-ingresos.component';

describe('GestionDeIngresosComponent', () => {
  let component: GestionDeIngresosComponent;
  let fixture: ComponentFixture<GestionDeIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDeIngresosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDeIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
