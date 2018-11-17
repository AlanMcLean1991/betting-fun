import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueScorersTableComponent } from './league-scorers-table.component';

describe('LeagueScorersTableComponent', () => {
  let component: LeagueScorersTableComponent;
  let fixture: ComponentFixture<LeagueScorersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueScorersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueScorersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
