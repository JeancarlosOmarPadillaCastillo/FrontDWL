import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInformacionVisitante2Component } from './dialog-informacion-visitante2.component';

describe('DialogInformacionVisitante2Component', () => {
  let component: DialogInformacionVisitante2Component;
  let fixture: ComponentFixture<DialogInformacionVisitante2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogInformacionVisitante2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogInformacionVisitante2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
