import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { League } from 'src/league';

@Component({
  selector: 'app-tables-container',
  templateUrl: './tables-container.component.html',
  styleUrls: ['./tables-container.component.css']
})
export class TablesContainerComponent implements OnInit {
  @Input() public league: League;

  constructor() {
   }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log(changes);
  }
}
