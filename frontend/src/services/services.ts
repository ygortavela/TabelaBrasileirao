import apiClient from './api-client-service';

const getClassificationTable = () => {
    return apiClient.get('/classification');
};

const getMatchesByRoundList = () => {
    return apiClient.get('/matches-by-round');
};

const getFreeMatches = () => {
    return apiClient.get('/free-matches');
};

const getTeams = () => {
    return apiClient.get('/team');
};

const postTeam = (data: Team) => {
    return apiClient.post('/team', data);
};

const replaceTeam = (data: Team) => {
    return apiClient.put(`/team/${data.teamId}`, data);
};

const deleteTeam = (teamId: number) => {
    return apiClient.delete(`/team/${teamId}`);
};

const postMatch = (data: Match) => {
    return apiClient.post('/match', data);
};

const postPlayMatch = async (data: Match) => {
    const matchId = data.matchId;
    const teams = data.teamsThatPlayedMatchList!;

    try {
        const responseTeamOne = await apiClient.post('/play-match', {
            matchId,
            teamId: teams[0].teamId,
            goalAmount: teams[0].goalAmount,
            yellowCardAmount: teams[0].yellowCardAmount,
            redCardAmount: teams[0].redCardAmount,
        });
        const responseTeamTwo = await apiClient.post('/play-match', {
            matchId,
            teamId: teams[1].teamId,
            goalAmount: teams[1].goalAmount,
            yellowCardAmount: teams[1].yellowCardAmount,
            redCardAmount: teams[1].redCardAmount,
        });

        return { responseTeamOne, responseTeamTwo };
    } catch (error) {
        console.log(error);
    }
};

const replacePlayMatch = async (data: Match) => {
    const matchId = data.matchId;
    const teams = data.teamsThatPlayedMatchList!;

    try {
        const responseTeamOne = await apiClient.put(`/play-match/${teams[0].playMatchId}`, {
            matchId,
            teamId: teams[0].teamId,
            goalAmount: teams[0].goalAmount,
            yellowCardAmount: teams[0].yellowCardAmount,
            redCardAmount: teams[0].redCardAmount,
        });
        const responseTeamTwo = await apiClient.put(`/play-match/${teams[1].playMatchId}`, {
            matchId,
            teamId: teams[1].teamId,
            goalAmount: teams[1].goalAmount,
            yellowCardAmount: teams[1].yellowCardAmount,
            redCardAmount: teams[1].redCardAmount,
        });

        return { responseTeamOne, responseTeamTwo };
    } catch (error) {
        console.log(error);
    }
};

const deletePlayMatch = async (data: Match) => {
    const teams = data.teamsThatPlayedMatchList!;

    try {
        await apiClient.delete(`/play-match/${teams[0].playMatchId}`);
        await apiClient.delete(`/play-match/${teams[1].playMatchId}`);

        return { status: 200 };
    } catch (error) {
        console.log(error);
    }
};

export {
    getClassificationTable,
    getMatchesByRoundList,
    getTeams,
    postTeam,
    replaceTeam,
    deleteTeam,
    getFreeMatches,
    postMatch,
    postPlayMatch,
    replacePlayMatch,
    deletePlayMatch,
};
