import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStandingsTableComponent } from './league-standings-table.component';

describe('LeagueStandingsTableComponent', () => {
  let component: LeagueStandingsTableComponent;
  let fixture: ComponentFixture<LeagueStandingsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueStandingsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueStandingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
