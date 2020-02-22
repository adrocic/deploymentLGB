import API from './api';
import { AxiosResponse } from 'axios';

export type Match = {
    seasonId: number;
    queueId: number;
    gameId: number;
    participantIdentities: [];
    gameVersion: string;
    platformId: string;
    gameMode: string;
    mapId: number;
    gametype: string;
    teams: [];
    participants: participant[];
    gameDuration: number;
    gameCreation: number;
};

type participant = {
    championId: number;
    stats: statsObject;
};
type statsObject = {
    [key: string]: number;
};

type fetchMatchProps = {
    matchId: number;
};

export const fetchMatch = async ({ matchId }: fetchMatchProps): Promise<AxiosResponse<Match>> => {
    const fetchedResponse = await API.get(`/matches/match/${matchId}`);
    return fetchedResponse.data;
};
