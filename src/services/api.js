import axios from 'axios';

const api = axios.create({
    baseURL: 'https://lojavirtual123.herokuapp.com',
});

export default api;