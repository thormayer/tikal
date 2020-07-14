import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentListItemComponent } from './agent-list-item.component';

describe('AgentListItemComponent', () => {
  let component: AgentListItemComponent;
  let fixture: ComponentFixture<AgentListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
