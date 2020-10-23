import apiClient from './apiClientService';

const getClassificationTable = () => {
    return apiClient.get('/classification');
};

export default getClassificationTable;
