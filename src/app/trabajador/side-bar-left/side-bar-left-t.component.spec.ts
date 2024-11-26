import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarLeftTComponent } from './side-bar-left-t.component';

describe('SideBarLeftComponent', () => {
  let component: SideBarLeftTComponent;
  let fixture: ComponentFixture<SideBarLeftTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarLeftTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarLeftTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
