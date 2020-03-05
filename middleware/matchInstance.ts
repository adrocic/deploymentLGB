import axios from 'axios';
import '../env.ts';

console.log('from matchinstance: ' + process.env.API_KEY);

const matchInstance = axios.create({
    baseURL: 'https://na1.api.riotgames.com/lol/match/v4',
    timeout: 5000,
    headers: { 'X-Riot-Token': `${process.env.API_KEY}` },
});

export default matchInstance;
