import { Injectable } from '@angular/core';

import * as agents from '../mocks/agent-list.mock';

@Injectable({
  providedIn: 'root'
})
export class TikalDashboardService {

  agents = agents.mi6;
  constructor() { }

  getAllAgents(){
    return this.agents;
  }

  getMostIsolatedCountry() {

    // get all agents that have only one appearance.

    // which country have the most "one appearances" ?
    console.log(this.agents)
  }
}
