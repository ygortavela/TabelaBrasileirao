interface ClassificationRow {
    teamName: string;
    points: number;
    matchesAmount: number;
    winAmount: number;
    tieAmount: number;
    loseAmount: number;
    goalAmount: number;
    negativeGoalAmount: number;
    goalBalance: number;
    performancePercentage: number;
}

interface Match {
    matchId: number;
    round: number;
    matchDateTime: number[];
    matchPlace: string;
    teamsThatPlayedMatchList: [Team, Team];
}

interface Team {
    teamId: number;
    playMatchId: number;
    name: string;
    initials: string;
    goalAmount: number;
    yellowCardAmount: number;
    redCardAmount: number;
}

type TeamState = {
    team: Team;
};

type TeamAction = {
    type: string;
    team: Team;
};

type DispatchType = (args: TeamAction) => TeamAction;
