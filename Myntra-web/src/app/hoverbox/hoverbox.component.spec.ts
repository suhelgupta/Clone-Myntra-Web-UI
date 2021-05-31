import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverboxComponent } from './hoverbox.component';

describe('HoverboxComponent', () => {
  let component: HoverboxComponent;
  let fixture: ComponentFixture<HoverboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
