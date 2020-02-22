import API from './api';
import { AxiosResponse } from 'axios';

export type MatchStats = {
    platformId: string;
    gameId: number;
    champion: number;
    queue: number;
    season: number;
    timestamp: number;
    role: string;
    lane: string;
};

export type MatchList = Array<MatchStats>;

type fetchMatchListProps = {
    accountId: string;
    queue: string;
};

export const fetchMatchlist = ({ accountId, queue }: fetchMatchListProps): Promise<AxiosResponse<MatchList>> => {
    return API.get(`/matches/${accountId}?queue=${queue}`);
};
