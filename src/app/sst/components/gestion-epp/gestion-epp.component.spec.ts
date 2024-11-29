import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEPPComponent } from './gestion-epp.component';

describe('GestionEPPComponent', () => {
  let component: GestionEPPComponent;
  let fixture: ComponentFixture<GestionEPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEPPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
