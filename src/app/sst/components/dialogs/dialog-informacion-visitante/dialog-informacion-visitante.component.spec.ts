import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInformacionVisitanteComponent } from './dialog-informacion-visitante.component';

describe('DialogInformacionVisitanteComponent', () => {
  let component: DialogInformacionVisitanteComponent;
  let fixture: ComponentFixture<DialogInformacionVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogInformacionVisitanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogInformacionVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
