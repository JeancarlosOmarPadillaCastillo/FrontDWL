import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionEPP3Component } from './recepcion-epp3.component';

describe('RecepcionEPP3Component', () => {
  let component: RecepcionEPP3Component;
  let fixture: ComponentFixture<RecepcionEPP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepcionEPP3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcionEPP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
