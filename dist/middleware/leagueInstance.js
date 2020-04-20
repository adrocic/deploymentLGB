"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
require("../env.ts");
var leagueInstance = axios_1.default.create({
    baseURL: 'https://na1.api.riotgames.com/lol/league/v4',
    timeout: 5000,
    headers: { 'X-Riot-Token': "" + process.env.API_KEY },
});
exports.default = leagueInstance;
//# sourceMappingURL=leagueInstance.js.map