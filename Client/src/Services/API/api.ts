import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

if (process.env.NODE_ENV === 'production') {
    const API = axios.create({
        baseURL: 'https://lolgamebuddy.herokuapp.com/app/api',
    });
} else {
    const API = axios.create({
        baseURL: 'http://localhost:8080/app/api',
    });
}

export default API;
