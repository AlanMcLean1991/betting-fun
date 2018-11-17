import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { League } from 'src/league';
import { HttpClient } from '@angular/common/http';
import { Team } from 'src/team';

@Component({
  selector: 'app-league-standings-table',
  templateUrl: './league-standings-table.component.html',
  styleUrls: ['./league-standings-table.component.css']
})
export class LeagueStandingsTableComponent implements OnInit {
  @Input() league: League;
  standings: any;
  teams: Team[] = [];

  constructor(private http: HttpClient) { 
    /*this.http.get('https://www.footballwebpages.co.uk/league-table.json?comp=1&showHa=yes')
      .subscribe(res => {this.standings = res; console.log(this.standings)});
      
    /*this.http.get(`https://www.footballwebpages.co.uk/league-table.json?comp=${this.league.id}&showHa=yes`)
      .subscribe(res => {
        this.teams = res.leagueTable.team;
        console.log(this.teams);
      })*/
  }

  ngOnInit() {      
  }

  ngOnChanges(changes) {
    let url = `https://www.footballwebpages.co.uk/league-table.json?comp=${this.league.id}&showHa=yes`;
    this.http.get(url)
      .subscribe(res => {
        let temp: Team[] = [];
        res['leagueTable']['team'].forEach(element => {
          temp.push(
            new Team(element.name, element.awayAgainst, element.awayDrawn, element.awayFor, element.awayLost,
              element.awayWon, element.goalDifference, element.homeAgainst, element.homeDrawn, element.homeFor,
              element.homeLost, element.homeWon, element.played, element.points, element.position));
        });
        this.teams = temp;
    })
  }

}
