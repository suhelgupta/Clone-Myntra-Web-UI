import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnockoutDealComponent } from './knockout-deal.component';

describe('KnockoutDealComponent', () => {
  let component: KnockoutDealComponent;
  let fixture: ComponentFixture<KnockoutDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnockoutDealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnockoutDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
