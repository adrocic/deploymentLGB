import axios from 'axios';
import { AxiosResponse } from 'axios';

export type Champion = {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: {};
    image: { full: string };
    tags: [];
    partype: string;
    stats: {};
};

type fetchChampsResponse = {
    type: string;
    format: string;
    version: string;
    data: {
        [key: string]: Champion;
    };
};

export const fetchChamps = (): Promise<AxiosResponse<fetchChampsResponse>> => {
    return axios.get('https://ddragon.leagueoflegends.com/cdn/10.3.1/data/en_US/champion.json');
};
