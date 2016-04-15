var express = require('express');
var Services = require('../services/Services.js');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var Player = require('../models/Player');

var PlayerRouter = express.Router();

var url = 'mongodb://localhost:27017/test';

PlayerRouter.use('/', function(req, res, next){
    next();
});

PlayerRouter.post('/register', function(req, res, callback){

    Player.register(new Player({username: req.body.username}), req.body.password, function(err, account){

        passport.authenticate('local')(req, res, function(){
            callback();
        })

    })
});

PlayerRouter.get('/getPlayer/:playerId', function(req, res, callback){

    MongoClient.connect(url, function(err, db){

        assert.equal(null, err);

        Services.getItem(db, data, function(item){

            res.json(item);
        })

    })



});


module.exports = PlayerRouter;
