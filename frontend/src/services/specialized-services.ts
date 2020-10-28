import apiClient from './api-client-service';

const getClassificationTable = () => {
    return apiClient.get('/classification');
};

const getMatchesByRoundList = () => {
    return apiClient.get('/matches-by-round');
};

export { getClassificationTable, getMatchesByRoundList };
