import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSubsanarConfirmacionComponent } from './dialog-subsanar-confirmacion.component';

describe('DialogSubsanarConfirmacionComponent', () => {
  let component: DialogSubsanarConfirmacionComponent;
  let fixture: ComponentFixture<DialogSubsanarConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogSubsanarConfirmacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSubsanarConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
