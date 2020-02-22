"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
//Create the schema which posts will adhere to
var Match = new mongoose.Schema({ data: Object, gameId: Number });
//Export the schema as 'Post'
exports["default"] = mongoose.model('Match', Match);
