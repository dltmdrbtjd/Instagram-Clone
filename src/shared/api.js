import axios from 'axios';

const api = axios.create({
    baseURL: 'http://13.209.80.252/',
    headers:{

    },
});

export const apis = {
    // board
    boards: () => api.get(`/board`),

    login: (id, pw) => api.post('/api/login', {username: id, password: pw}),
    signup: (email, nick, id, pw) => api.post('/api/signup', {email: email, nickname: nick, username: id, password: pw}),
};
