import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/championship/',
    withCredentials: false,
    headers: {
        'content-type': 'application/json',
    },
});

export default apiClient;
