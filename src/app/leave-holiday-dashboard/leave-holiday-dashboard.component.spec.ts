import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveHolidayDashboardComponent } from './leave-holiday-dashboard.component';

describe('LeaveHolidayDashboardComponent', () => {
  let component: LeaveHolidayDashboardComponent;
  let fixture: ComponentFixture<LeaveHolidayDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveHolidayDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveHolidayDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
