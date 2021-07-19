import axios from 'axios';

const api = axios.create({
    baseURL: 'http://13.209.80.252/',
    headers:{

    },
});

export const apis = {
    // board
    articles: () => api.get(`/api/articles`),
    AddArticles: () => api.post(`/api/articles`),
    DelArticles: (articleId) => api.delete(`/api/articles/${articleId}`),
    UpdateArticles: (articleId) => api.put(`/api/articles/${articleId}`),

    // comments
    AddComment: (articleId) => api.post(`/api/articles/${articleId}/comments`),
    DelComment: (articleId,commentId) => api.delete(`/api/articles/${articleId}/comments/${commentId}`),
    UpdateComment: (articleId,commentId) => api.put(`/api/articles/${articleId}/comments/${commentId}`),

    // like
    like: (articleId) => api.post(`/api/articles/${articleId}/like`),

    // user
    login: (id, pw) => api.post('/api/login', {username: id, password: pw}),
    signup: (email, nick, id, pw) => api.post('/api/signup', {email: email, nickname: nick, username: id, password: pw}),
};
