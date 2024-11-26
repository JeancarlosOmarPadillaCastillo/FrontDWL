import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSolicitudConfirmacionComponent } from './dialog-solicitud-confirmacion.component';

describe('DialogSolicitudConfirmacionComponent', () => {
  let component: DialogSolicitudConfirmacionComponent;
  let fixture: ComponentFixture<DialogSolicitudConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogSolicitudConfirmacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSolicitudConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
