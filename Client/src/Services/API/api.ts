import axios from 'axios';

const API = axios.create({
    baseURL: `http://localhost:${process.env.baseURL}`,
});

export default API;
