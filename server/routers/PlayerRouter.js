var express = require('express');
var Services = require('../services/Services.js');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var passport = require('passport');

var Player = require('../models/Player');

var PlayerRouter = express.Router();

var url = 'mongodb://localhost:27017/test';

PlayerRouter.use('/', function(req, res, next){
    next();
});

PlayerRouter.post('/register', function(req, res){

    console.log(req.body);

    Player.register(new Player(req.body), req.body.password, function(err){

        if(err){
            res.json({statusCode: 1, statusMessage: err.message});
        }

        passport.authenticate('local')(req, res, function(){
            res.redirect('getPlayer/'+ req.user.username);
        })

    })
});

PlayerRouter.post('/login', function(req, res){

    passport.authenticate('local')(req, res, function(){
        res.redirect('getPlayer/' + req.user.username);
    })

});

PlayerRouter.post('/logout', function(req, res){
    req.logout();
    res.send('user has logged out');
});

PlayerRouter.get('/getPlayer/:player', function(req, res){

    if(req.isAuthenticated()){

        Player.findOne({'username': req.params.player}, function (err, result) {
            console.log(result);
            res.json(result);
        })
    }
    else{
        res.send('Please log into view your account');
    }

});


module.exports = PlayerRouter;
