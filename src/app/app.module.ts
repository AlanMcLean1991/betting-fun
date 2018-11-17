import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TablesContainerComponent } from './tables-container/tables-container.component';
import { LeagueStandingsTableComponent } from './tables-container/league-standings-table/league-standings-table.component';
import { LeagueScorersTableComponent } from './tables-container/league-scorers-table/league-scorers-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TablesContainerComponent,
    LeagueStandingsTableComponent,
    LeagueScorersTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
