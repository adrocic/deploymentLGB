import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

let API = axios.create({
    baseURL: 'http://localhost:8080/app/api',
});

if (process.env.NODE_ENV === 'production') {
    API = axios.create({
        baseURL: 'https://lolgamebuddy.herokuapp.com/app/api',
    });
}

export default API;
