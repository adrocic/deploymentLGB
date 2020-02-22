import { Request, Response, NextFunction } from 'express';
import summonerInstance from './summonerInstance';
import matchInstance from './matchInstance';
import leagueInstance from './leagueInstance';
import Match from '../models/Match';
import '../env';

interface MatchResponse extends Response {
    match?: Document | null;
}

export const getSummonerByName = async (req: Request, res: MatchResponse, next: NextFunction): Promise<void> => {
    const nameParam = req.params.name;
    try {
        const summoner = await summonerInstance.get(`/summoners/by-name/${nameParam}`);

        if (summoner) {
            const summonerId = summoner.data.id;
            const { profileIconId, summonerLevel, accountId, name } = summoner.data;
            const summonerWithStats = await leagueInstance.get(`/entries/by-summoner/${summonerId}`);
            const fullSummonerInfo = {
                name: name,
                accountId: accountId,
                profileIconId: profileIconId,
                summonerLevel: summonerLevel,
                ...summonerWithStats.data[0],
            };
            res.json(fullSummonerInfo);
        } else {
            res.status(404);
            res.json({ message: 'Summoner not found!' });
        }
    } catch (error) {
        next(error);
    }
};

export const getMatchListByAccountId = async (req: Request, res: MatchResponse, next: NextFunction): Promise<void> => {
    const accountIdParam = req.params.accountId;
    const queueParam = req.query.queue;
    console.log(queueParam);
    let queue;
    if (queueParam == 'normals') {
        queue = '430';
    } else {
        queue = '420';
    }
    try {
        const matchList = await matchInstance.get(`/matchlists/by-account/${accountIdParam}?queue=${queue}`);
        if (matchList) {
            const clone = [...matchList.data.matches].slice(0, 40);
            res.json(clone);
        } else {
            res.status(404);
            res.json({ message: 'No matchlists associated with that account!' });
        }
    } catch (error) {
        next(error);
    }
};

export const getMatchByMatchId = async (req: Request, res: MatchResponse, next: NextFunction): Promise<void> => {
    const gameId = req.params.matchId;
    try {
        const match = await Match.findOne({ gameId: gameId });
        if (match) {
            console.log(match);
            res.json(match);
            next();
        } else {
            const fetchedMatch = await matchInstance.get(`/matches/${gameId}`);
            const dbMatch = { data: fetchedMatch.data, gameId: gameId };
            Match.create(dbMatch, function(err: any) {
                if (err) console.log(err);
            });
            console.log({ message: `No match found for ${gameId} in DB, adding to DB.` });
            console.log(fetchedMatch);
            res.json(fetchedMatch);
        }
    } catch (error) {
        next(error);
    }
};
