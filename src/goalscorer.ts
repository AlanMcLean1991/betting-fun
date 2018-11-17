export class Goalscorer {
    position: number;
    player: string;
    team: string;
    goals: number;

    constructor(position, player, team, goals) {
        this.position = position;
        this.player = player;
        this.team = team;
        this.goals = goals;
    }
}
