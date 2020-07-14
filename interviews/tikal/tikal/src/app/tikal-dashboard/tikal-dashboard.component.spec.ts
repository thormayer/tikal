import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TikalDashboardComponent } from './tikal-dashboard.component';

describe('TikalDashboardComponent', () => {
  let component: TikalDashboardComponent;
  let fixture: ComponentFixture<TikalDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TikalDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TikalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
