"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var axiosMiddleWare_1 = require("../middleware/axiosMiddleWare");
var matchesRouter = express.Router();
matchesRouter.get("/:accountId", axiosMiddleWare_1.getMatchListByAccountId);
matchesRouter.get('/match/:matchId', axiosMiddleWare_1.getMatchByMatchId);
exports.default = matchesRouter;
//# sourceMappingURL=matches.js.map