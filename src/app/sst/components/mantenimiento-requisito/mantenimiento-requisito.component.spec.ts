import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoRequisitoComponent } from './mantenimiento-requisito.component';

describe('MantenimientoRequisitoComponent', () => {
  let component: MantenimientoRequisitoComponent;
  let fixture: ComponentFixture<MantenimientoRequisitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoRequisitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoRequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
