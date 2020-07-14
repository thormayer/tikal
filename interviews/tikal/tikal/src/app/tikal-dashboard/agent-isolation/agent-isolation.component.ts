import { Component, OnInit } from '@angular/core';
import { AgentIsolationService } from '../services/agent-isolation.service'

@Component({
  selector: 'agent-isolation',
  templateUrl: './agent-isolation.component.html',
  styleUrls: ['./agent-isolation.component.scss']
})
export class AgentIsolationComponent implements OnInit {

  mostIsolatedCountry;

  constructor(private agentIsolationService: AgentIsolationService) { }

  ngOnInit(): void {
    this.mostIsolatedCountry = this.agentIsolationService.getMostIsolatedCountry();
  }

}
