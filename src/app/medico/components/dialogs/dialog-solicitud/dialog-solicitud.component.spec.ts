import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSolicitudComponent } from './dialog-solicitud.component';

describe('DialogSolicitudComponent', () => {
  let component: DialogSolicitudComponent;
  let fixture: ComponentFixture<DialogSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogSolicitudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
