import API from './api';
import { AxiosResponse } from 'axios';

type FetchSummonerProps = {
    summonerName: string;
};

type SummonerStats = {
    queueType: string;
    summonerName: string;
    hotStreak: boolean;
    miniSeries: object;
    wins: number;
    veteran: boolean;
    losses: number;
    rank: string;
    leagueId: string;
    inactive: boolean;
    freshBlood: boolean;
    tier: string;
    summonerId: string;
    leaguePoints: number;
    profileIconId: number;
    summonerLevel: number;
    accountId: string;
    name: string;
};

export const fetchSummonerByName = ({ summonerName }: FetchSummonerProps): Promise<AxiosResponse<SummonerStats>> => {
    return API.get(`/summoners/${summonerName}`);
};
