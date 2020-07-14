import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit(): void {
    console.log('data', this.data)
  }

}
