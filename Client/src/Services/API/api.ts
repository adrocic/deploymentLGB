import axios from 'axios';

const API = axios.create({
    baseURL: 'https://lolgamebuddy.herokuapp.com',
});

export default API;
