import { Component, OnInit } from '@angular/core';

import { TikalDashboardService } from './services/tikal-dashboard.service';

@Component({
  selector: 'tikal-dashboard',
  templateUrl: './tikal-dashboard.component.html',
  styleUrls: ['./tikal-dashboard.component.scss']
})
export class TikalDashboardComponent implements OnInit {


  agents;

  constructor(private dashboardService: TikalDashboardService) { }

  ngOnInit(): void {
    this.agents = this.dashboardService.getAllAgents()
  }

}
