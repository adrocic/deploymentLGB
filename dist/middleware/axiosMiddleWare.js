"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var summonerInstance_1 = __importDefault(require("./summonerInstance"));
var matchInstance_1 = __importDefault(require("./matchInstance"));
var leagueInstance_1 = __importDefault(require("./leagueInstance"));
var Match_1 = __importDefault(require("../models/Match"));
require("../env.ts");
exports.getSummonerByName = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var nameParam, summoner, summonerId, _a, profileIconId, summonerLevel, accountId, name_1, summonerWithStats, fullSummonerInfo, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                nameParam = req.params.name;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, summonerInstance_1.default.get("/summoners/by-name/" + nameParam)];
            case 2:
                summoner = _b.sent();
                if (!summoner) return [3 /*break*/, 4];
                summonerId = summoner.data.id;
                _a = summoner.data, profileIconId = _a.profileIconId, summonerLevel = _a.summonerLevel, accountId = _a.accountId, name_1 = _a.name;
                return [4 /*yield*/, leagueInstance_1.default.get("/entries/by-summoner/" + summonerId)];
            case 3:
                summonerWithStats = _b.sent();
                fullSummonerInfo = __assign({ name: name_1, accountId: accountId, profileIconId: profileIconId, summonerLevel: summonerLevel }, summonerWithStats.data[0]);
                res.json(fullSummonerInfo);
                return [3 /*break*/, 5];
            case 4:
                res.status(404);
                res.json({ message: 'Summoner not found!' });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getMatchListByAccountId = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var accountIdParam, queueParam, queue, matchList, clone, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                accountIdParam = req.params.accountId;
                queueParam = req.query.queue;
                console.log(queueParam);
                if (queueParam == 'normals') {
                    queue = '430';
                }
                else {
                    queue = '420';
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, matchInstance_1.default.get("/matchlists/by-account/" + accountIdParam + "?queue=" + queue)];
            case 2:
                matchList = _a.sent();
                if (matchList) {
                    clone = __spreadArrays(matchList.data.matches).slice(0, 20);
                    res.json(clone);
                }
                else {
                    res.status(404);
                    res.json({ message: 'No matchlists associated with that account!' });
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getMatchByMatchId = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var gameId, match, fetchedMatch, dbMatch, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                gameId = req.params.matchId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, Match_1.default.findOne({ gameId: gameId })];
            case 2:
                match = _a.sent();
                if (!match) return [3 /*break*/, 3];
                res.json(match);
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, matchInstance_1.default.get("/matches/" + gameId)];
            case 4:
                fetchedMatch = _a.sent();
                dbMatch = { data: fetchedMatch.data, gameId: gameId };
                Match_1.default.create(dbMatch, function (err) {
                    if (err)
                        console.log(err);
                });
                res.json(fetchedMatch);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=axiosMiddleWare.js.map