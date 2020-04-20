"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
var cors = require("cors");
var mongoose = require("mongoose");
var matches_1 = __importDefault(require("./routes/matches"));
var summoner_1 = __importDefault(require("./routes/summoner"));
var path = require("path");
require("./env.ts");
var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Client/build')));
app.use('/app/api/summoners', summoner_1.default);
app.use('/app/api/matches', matches_1.default);
app.get(['/app', '/app/*'], function (req, res) {
    res.sendFile(path.join(__dirname, 'Client/build/index.html'));
});
//DATABASE CONNECTION STUFF
mongoose.connect((_a = process.env.DB_CONNECTION) !== null && _a !== void 0 ? _a : '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on('error', function (error) { return console.log(error); });
db.once('open', function () { return console.log('connected to database'); });
var PORT = process.env.PORT || 8080;
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ message: err.message });
    next();
});
app.listen(PORT, function () { return console.log("listening at http://localhost:" + PORT); });
//# sourceMappingURL=server.js.map