/*export class Team {
    name: string;
    played: string;
    won: string;
    drawn: string;
    lost: string;
    for: string;
    against: string;
    goalDifference: string;
    points: string;
}*/
export class Team {
    awayAgainst: number;
    awayDrawn: number;
    awayFor: number;
    awayLost: number;
    awayWon: number;
    goalDifference: number;
    homeAgainst: number;
    homeDrawn: number;
    homeFor: number;
    homeLost: number;
    homeWon: number;
    name: string;
    played: number;
    points: number;
    position: number;
    form: string[];

    constructor(name, awayAgainst, awayDrawn, awayFor, awayLost, awayWon, goalDifference, homeAgainst,
        homeDrawn, homeFor, homeLost, homeWon, played, points, position, form) {
        this.name = name;
        this.awayAgainst = +awayAgainst;
        this.awayDrawn = +awayDrawn;
        this.awayFor = +awayFor;
        this.awayLost = +awayLost;
        this.awayWon = +awayWon;
        this.goalDifference = +goalDifference;
        this.homeAgainst = +homeAgainst;
        this.homeDrawn = +homeDrawn;
        this.homeFor = +homeFor;
        this.homeLost = +homeLost;
        this.homeWon = +homeWon;
        this.played = +played;
        this.points = +points;
        this.position = +position;
        this.form = form;
    }
}