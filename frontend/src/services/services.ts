import apiClient from './api-client-service';

const getClassificationTable = () => {
    return apiClient.get('/classification');
};

const getMatchesByRoundList = () => {
    return apiClient.get('/matches-by-round');
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

export { getClassificationTable, getMatchesByRoundList, getTeams, postTeam, replaceTeam, deleteTeam };
