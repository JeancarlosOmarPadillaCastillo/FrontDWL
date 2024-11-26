import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModificarConfirmacionComponent } from './dialog-modificar-confirmacion.component';

describe('DialogModificarConfirmacionComponent', () => {
  let component: DialogModificarConfirmacionComponent;
  let fixture: ComponentFixture<DialogModificarConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogModificarConfirmacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogModificarConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
