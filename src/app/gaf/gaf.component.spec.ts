import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GafComponent } from './gaf.component';

describe('GafComponent', () => {
  let component: GafComponent;
  let fixture: ComponentFixture<GafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GafComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
