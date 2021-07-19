import axios from 'axios';

const api = axios.create({
    baseURL: 'http://13.209.80.252/',
    headers:{
        'content-type': 'application/json;charset=UTF-8',
        accept: 'application/json,',
        
    },
});

api.interceptors.request.use(function (config) {
	const accessToken = document.cookie.split('=')[1];
	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
	return config;
});

export const apis = {
    // board
    boards: () => api.get(`/board`),

    login: (id, pw) => api.post('/api/login', {username: id, password: pw}),
    signup: (email, nick, id, pw) => api.post('/api/signup', {email: email, nickname: nick, username: id, password: pw}),
};
