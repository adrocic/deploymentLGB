import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const API = axios.create({
    baseURL: `${process.env.baseURL ?? 'http://localhost:8080/app'}/api`,
});

export default API;
