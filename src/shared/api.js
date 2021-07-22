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
    DetailArticle: (articleId) => api.get(`/api/articles/${articleId}`),
    AddArticles: (contents) => api.post(`/api/articles`,contents),
    DelArticles: (articleId) => api.delete(`/api/articles/${articleId}`),
    UpdateArticles: (articleId , content ) => api.put(`/api/articles/${articleId}`,{content:content}),

    // comments
    AddComment: (articleId, content) => api.post(`/api/articles/${articleId}/comments`, {content: content}),
    DelComment: (articleId,commentId) => api.delete(`/api/articles/${articleId}/comments/${commentId}`),
    // UpdateComment: (articleId,commentId) => api.put(`/api/articles/${articleId}/comments/${commentId}`),

    // like
    like: (articleId) => api.post(`/api/articles/${articleId}/like`),

    // user
    login: (id, pw) => api.post('/api/login', {usernameOrEmail: id, password: pw}),
    signup: (email, nick, id, pw) => api.post('/api/signup', {email: email, nickname: nick, username: id, password: pw}),

    // myinfo
    myinfo: () => api.get('/api/myinfo'),
    myprofile: () => api.get('/api/user'),
    changeProfile: (content) => api.put('/api/user', content),

    //follow
    recommend: () => api.get('/api/recommend'),
    follow: (userId) => api.post(`/api/follow/${userId}`),
};
