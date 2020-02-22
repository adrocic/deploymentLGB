import express from 'express';
import { getAllChamps, getChamp } from '../middleware/axiosMiddleWare';

const champsRouter = express.Router();

champsRouter.get('/', getAllChamps);
champsRouter.get('/:championName', getChamp);

export default champsRouter;
