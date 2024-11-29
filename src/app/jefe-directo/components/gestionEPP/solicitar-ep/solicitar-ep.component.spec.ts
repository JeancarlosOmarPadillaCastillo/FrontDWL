import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarEPComponent } from './solicitar-ep.component';

describe('SolicitarEPComponent', () => {
  let component: SolicitarEPComponent;
  let fixture: ComponentFixture<SolicitarEPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarEPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
