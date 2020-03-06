import axios from 'axios';

const API = axios.create({
    baseURL: `${process.env.BASE_URL ?? 'http://localhost:8080/app'}/api`,
});

export default API;
