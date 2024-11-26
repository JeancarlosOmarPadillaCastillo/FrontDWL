import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarNuevoRequisitoComponent } from './asociar-nuevo-requisito.component';

describe('AsociarNuevoRequisitoComponent', () => {
  let component: AsociarNuevoRequisitoComponent;
  let fixture: ComponentFixture<AsociarNuevoRequisitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsociarNuevoRequisitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsociarNuevoRequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
