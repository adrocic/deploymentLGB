import axios from 'axios';
import '../env';

const assetsDataInstance = axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/10.3.1',
    timeout: 5000,
    headers: { 'X-Riot-Token': `${process.env.API_KEY}` },
});

export default assetsDataInstance;
