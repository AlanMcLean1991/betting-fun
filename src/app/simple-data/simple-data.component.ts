import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { League } from '../../league';

@Component({
  selector: 'app-simple-data',
  templateUrl: './simple-data.component.html',
  styleUrls: ['./simple-data.component.css']
})
export class SimpleDataComponent implements OnInit {
  private title = '#BettingFun';
  private LEAGUES_FEED_URL = 'https://www.footballwebpages.co.uk/competitions.json';
  public availableLeagues: League[] = [];
  public selectedLeagues: League[] = [];
  public selectedMenuLeague: League;
  public displayLeague: League;

  constructor(private http: HttpClient) {
    this.http.get('../assets/leagues.json').subscribe((res: Object[]) => {
      res.forEach(element => {
        this.availableLeagues.push(new League(element['name'], element['id']))
      });
      if (this.availableLeagues.length > 0) {
        this.selectedMenuLeague = this.availableLeagues[0];
      }
     })
  }

  ngOnInit() {
  }

  addLeagueToSelectedLeauges() {
    this.selectedLeagues.push(this.selectedMenuLeague);
  }

  setClickedRow(clickedLeague) {
    this.displayLeague = clickedLeague;
    console.log(`displayedLeague = ${this.displayLeague.name}`);

  }

  }
