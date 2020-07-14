import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TikalDashboardComponent } from './tikal-dashboard/tikal-dashboard.component';
import { AgentIsolationComponent } from './tikal-dashboard/agent-isolation/agent-isolation.component';
import { AgentListComponent } from './tikal-dashboard/agent-list/agent-list.component';
import { AgentListItemComponent } from './tikal-dashboard/agent-list/agent-list-item/agent-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TikalDashboardComponent,
    AgentIsolationComponent,
    AgentListComponent,
    AgentListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
