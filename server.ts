import express = require('express');
import { ErrorRequestHandler, Response, Request, NextFunction } from 'express';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import cors = require('cors');
import mongoose = require('mongoose');
import matchesRouter from './routes/matches';
import summonerRouter from './routes/summoner';
import path = require('path');

const app = express();

interface Error extends ErrorRequestHandler {
    status?: number;
    message: string;
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Client/build')));
app.use('/app/api/summoners', summonerRouter);
app.use('/app/api/matches', matchesRouter);
app.get(['/app', '/app/*'], (req, res) => {
    res.sendFile(path.join(__dirname, 'Client/build/index.html'));
});

//DATABASE CONNECTION STUFF
mongoose.connect(
    'mongodb+srv://adrocic:GfnkuqB8j8x83fne@cluster0-vwtlm.gcp.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
);

const db = mongoose.connection;

db.on('error', error => console.log(error));
db.once('open', () => console.log('connected to database'));

const PORT = process.env.PORT || 8080;

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({ message: err.message });
    next();
});

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
