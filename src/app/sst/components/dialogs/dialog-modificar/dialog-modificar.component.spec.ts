import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModificarComponent } from './dialog-modificar.component';

describe('DialogModificarComponent', () => {
  let component: DialogModificarComponent;
  let fixture: ComponentFixture<DialogModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogModificarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
