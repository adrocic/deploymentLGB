"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
require("../env");
var summonerInstance = axios_1["default"].create({
    baseURL: 'https://na1.api.riotgames.com/lol/summoner/v4',
    timeout: 5000,
    headers: { 'X-Riot-Token': "" + process.env.API_KEY }
});
exports["default"] = summonerInstance;
