import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarInventario2Component } from './gestionar-inventario-2.component';

describe('GestionarInventarioComponent', () => {
  let component: GestionarInventario2Component;
  let fixture: ComponentFixture<GestionarInventario2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarInventario2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarInventario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
