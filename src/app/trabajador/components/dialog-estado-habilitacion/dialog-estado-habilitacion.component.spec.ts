import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEstadoHabilitacionComponent } from './dialog-estado-habilitacion.component';

describe('DialogEstadoHabilitacionComponent', () => {
  let component: DialogEstadoHabilitacionComponent;
  let fixture: ComponentFixture<DialogEstadoHabilitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEstadoHabilitacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEstadoHabilitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
