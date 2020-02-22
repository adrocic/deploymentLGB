import axios from 'axios';
import '../env';

const summonerInstance = axios.create({
    baseURL: 'https://na1.api.riotgames.com/lol/summoner/v4',
    timeout: 5000,
    headers: { 'X-Riot-Token': `${process.env.API_KEY}` },
});

export default summonerInstance;
