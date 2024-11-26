import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEliminarConfirmacionComponent } from './dialog-eliminar-confirmacion.component';

describe('DialogEliminarConfirmacionComponent', () => {
  let component: DialogEliminarConfirmacionComponent;
  let fixture: ComponentFixture<DialogEliminarConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEliminarConfirmacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEliminarConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
