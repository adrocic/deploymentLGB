"use strict";
var _a;
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var matches_1 = require("./routes/matches");
var summoner_1 = require("./routes/summoner");
var home_1 = require("./routes/home");
var path = require("path");
require("./env");
var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', home_1["default"]);
app.use('/summoners', summoner_1["default"]);
app.use('/matches', matches_1["default"]);
//DATABASE CONNECTION STUFF
mongoose.connect((_a = process.env.DB_CONNECTION, (_a !== null && _a !== void 0 ? _a : '')), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', function (error) { return console.log(error); });
db.once('open', function () { return console.log('connected to database'); });
var PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'lolgamebuddy-frontend/build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ message: err.message });
    next();
});
app.listen(PORT, function () { return console.log("listening at http://localhost:" + PORT); });
