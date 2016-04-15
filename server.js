var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var PlayerRouter = require('./server/routers/PlayerRouter.js');
var MonsterRouter = require('./server/routers/MonsterRouter.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var assert = require('assert');

var url = 'mongodb://localhost:27017/test';


var app = express();
app.set('port', (process.env.PORT || 8080));

app.use('/', express.static(__dirname+'/dist/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('express-session')({
    secret: 'supper whale mega nutrients',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

var Player = require('./server/models/Player.js');
passport.use(new LocalStrategy(Player.authenticate()));
passport.serializeUser(Player.serializeUser());
passport.deserializeUser(Player.deserializeUser());

mongoose.connect(url);

app.use('/api/monsters', MonsterRouter);

app.use('/api/player', PlayerRouter);

app.listen(app.get('port'));