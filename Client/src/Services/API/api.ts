import axios from 'axios';

const API = axios.create({
    baseURL: process.env.baseURL || 'http://localhost:3000',
});

export default API;
