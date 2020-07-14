import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'agent-list-item',
  templateUrl: './agent-list-item.component.html',
  styleUrls: ['./agent-list-item.component.scss']
})
export class AgentListItemComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit(): void {
  }

}
