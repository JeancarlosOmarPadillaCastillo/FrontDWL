import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionEPPComponent } from './recepcion-epp.component';

describe('RecepcionEPPComponent', () => {
  let component: RecepcionEPPComponent;
  let fixture: ComponentFixture<RecepcionEPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepcionEPPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcionEPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
