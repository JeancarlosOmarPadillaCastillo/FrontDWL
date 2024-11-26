import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionEPP2Component } from './recepcion-epp2.component';

describe('RecepcionEPP2Component', () => {
  let component: RecepcionEPP2Component;
  let fixture: ComponentFixture<RecepcionEPP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepcionEPP2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcionEPP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
