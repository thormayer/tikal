import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentIsolationComponent } from './agent-isolation.component';

describe('AgentIsolationComponent', () => {
  let component: AgentIsolationComponent;
  let fixture: ComponentFixture<AgentIsolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentIsolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentIsolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
