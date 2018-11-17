import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { League } from 'src/league';
import { Goalscorer } from 'src/goalscorer';

@Component({
  selector: 'app-league-scorers-table',
  templateUrl: './league-scorers-table.component.html',
  styleUrls: ['./league-scorers-table.component.css']
})
export class LeagueScorersTableComponent implements OnInit {
  @Input() league: League;
  goalscorers: Goalscorer[] = []
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    let url = `https://www.footballwebpages.co.uk/goalscorers.json?comp=${this.league.id}&max=20`
    this.http.get(url)
      .subscribe(res => {
        let temp: Goalscorer[] = [];
        res['goalscorersCompetition']['goalscorer'].forEach(element => {
          temp.push(new Goalscorer(element.position, element.player, element.team, element.goals));
        });
        this.goalscorers = temp;
      })
  }

}
