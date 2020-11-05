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
    teamsThatPlayedMatchList?: [Team, Team];
}

interface Team {
    teamId: number;
    name: string;
    initials: string;
    playMatchId?: number;
    goalAmount?: number;
    yellowCardAmount?: number;
    redCardAmount?: number;
}
