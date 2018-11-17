import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { League } from '../league';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = '#BettingFun';
  private LEAGUES_FEED_URL = 'https://www.footballwebpages.co.uk/competitions.json';
  //private LEAGUES_FEED_URL = 'https://www.footballwebpages.co.uk/goalscorers.json?comp=1&max=48';
  public availableLeagues: League[] = [];
  public selectedLeagues: League[] = [];
  public selectedMenuLeague: League;
  public displayLeague: League;
  
  constructor(private http: HttpClient) {
    /*this.availableLeagues = [{
        "id":"1",
        "name":"Premier League"
     },
     {
        "id":"2",
        "name":"Sky Bet Championship"
     },
    ];*/
     this.http.get('../assets/leagues.json').subscribe((res: Object[]) => {
       res.forEach(element => {
         this.availableLeagues.push(new League(element['name'], element['id']))
       });
      })
  }

  addLeagueToSelectedLeauges() {
    this.selectedLeagues.push(this.selectedMenuLeague);
  }

  setClickedRow(clickedLeague) {
    this.displayLeague = clickedLeague;
    console.log(`displayedLeague = ${this.displayLeague.name}`);

  }
}
