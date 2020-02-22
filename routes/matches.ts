import express from 'express';
import { getMatchListByAccountId, getMatchByMatchId } from '../middleware/axiosMiddleWare';

const matchesRouter = express.Router();

matchesRouter.get(`/:accountId`, getMatchListByAccountId);

matchesRouter.get('/match/:matchId', getMatchByMatchId);

export default matchesRouter;
