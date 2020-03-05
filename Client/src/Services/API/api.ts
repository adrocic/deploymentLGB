import axios from 'axios';

const API = axios.create({
    baseURL: `${'https://lolgamebuddy.herokuapp.com/app' ?? 'http://localhost:8080/app'}/api`,
});

export default API;
