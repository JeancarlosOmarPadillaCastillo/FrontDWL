import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalItemsConfirmacionComponent } from './modal-items-confirmacion.component';

describe('ModalItemsConfirmacionComponent', () => {
  let component: ModalItemsConfirmacionComponent;
  let fixture: ComponentFixture<ModalItemsConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalItemsConfirmacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalItemsConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
