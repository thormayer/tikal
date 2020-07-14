import { Injectable } from '@angular/core';
import * as agents from '../mocks/agent-list.mock';

@Injectable({
  providedIn: 'root'
})
export class AgentIsolationService {
  agents = agents.mi6;

  
  constructor() { }

  getMostIsolatedCountry() {
   
    let apps = this.getAgentAppearances()
    let countries = this.getSingleAppearancesCount(apps)
    return this.getMostSingleAppearancesCountry(countries)
  }

  getMostSingleAppearancesCountry(countries) {
    let winnerCountry = {};
    let winnerCount = 0;
    for (const country in countries) {
      if(countries[country].count >= winnerCount) {
        winnerCountry = { country, count: countries[country].count };
        winnerCount = countries[country].count;
      }
    }
    return winnerCountry;
  }

  getAgentAppearances(){
    var appearances = {};

    this.agents.forEach(agent => {
      let agentNumber = agent.agent;

      appearances[agentNumber] ? 
              appearances[agentNumber].count++ :
              appearances[agentNumber] = {count: 1, country: agent.country};
      
    })

    return appearances
  }

  getSingleAppearancesCount(apps) {
    let countries = {};
    for (const agentNumber in apps) {
      if(apps[agentNumber].count === 1) {
        let country = apps[agentNumber].country;
        countries[country] ?
            countries[country].count++  :
            countries[country] = {count: 1}
      }
    }
    return countries;
  }
}
