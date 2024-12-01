import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalItemsRechazarComponent } from './modal-items-rechazar.component';

describe('ModalItemsConfirmacionComponent', () => {
  let component: ModalItemsRechazarComponent;
  let fixture: ComponentFixture<ModalItemsRechazarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalItemsRechazarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalItemsRechazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
