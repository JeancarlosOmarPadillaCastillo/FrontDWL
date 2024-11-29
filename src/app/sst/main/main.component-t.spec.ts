import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponentT } from './main.component-t';

describe('MainComponent', () => {
  let component: MainComponentT;
  let fixture: ComponentFixture<MainComponentT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponentT]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponentT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
