import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers:{

    },
});

export const apis = {
    // board
    boards: () => api.get(`/board`)
}