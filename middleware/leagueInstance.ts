import axios from 'axios';
import '../env.ts';

const leagueInstance = axios.create({
    baseURL: 'https://na1.api.riotgames.com/lol/league/v4',
    timeout: 5000,
    headers: { 'X-Riot-Token': `${process.env.API_KEY}` },
});

export default leagueInstance;
