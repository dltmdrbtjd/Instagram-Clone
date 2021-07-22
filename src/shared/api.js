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
    articles: () => api.get(`/api/articles`),
    AddArticles: (content) => api.post(`/api/articles`,content), 
    DelArticles: (articleId) => api.delete(`/api/articles/${articleId}`),
    UpdateArticles: (articleId , contents ) => api.put(`/api/articles/${articleId}`,contents),

    // comments
    AddComment: (articleId, content) => api.post(`/api/articles/${articleId}/comments`, {content: content}),
    DelComment: (articleId,commentId) => api.delete(`/api/articles/${articleId}/comments/${commentId}`),
    // UpdateComment: (articleId,commentId) => api.put(`/api/articles/${articleId}/comments/${commentId}`),

    // like
    like: (articleId) => api.post(`/api/articles/${articleId}/like`),

    // user
    login: (id, pw) => api.post('/api/login', {usernameOrEmail: id, password: pw}),
    signup: (email, nick, id, pw) => api.post('/api/signup', {email: email, nickname: nick, username: id, password: pw}),
};
