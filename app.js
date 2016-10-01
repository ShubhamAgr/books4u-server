/*Require node packages from node modules*/
var express = require('express')
var app = express();
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

/*constants*/
const url = "mongodb://localhost:27017/books4u-server"
mongoose.connect(url);

require('./routes.js')(app);
