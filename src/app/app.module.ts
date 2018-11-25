import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TablesContainerComponent } from './tables-container/tables-container.component';
import { LeagueStandingsTableComponent } from './tables-container/league-standings-table/league-standings-table.component';
import { LeagueScorersTableComponent } from './tables-container/league-scorers-table/league-scorers-table.component';
import { SimpleDataComponent } from './simple-data/simple-data.component';

const appRoutes: Routes = [
  { path: 'leagues', component: SimpleDataComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TablesContainerComponent,
    LeagueStandingsTableComponent,
    LeagueScorersTableComponent,
    SimpleDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
