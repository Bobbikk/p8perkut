var express = require('express');
var Services = require('./../services/Services.js');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var MonsterRouter = express.Router();

var url = 'mongodb://localhost:27017/test';


MonsterRouter.use('/', function(req, res, next){
    next();
});



MonsterRouter.post('/addMonster', function(req, res, next){

    MongoClient.connect(url, function(err, db){

        assert.equal(null, err);

        Services.addItem(db, req.body.data, function(item){

            res.json(item);

            console.log('Monster Added');
            db.close();
        });



    });

});

MonsterRouter.get('/getMonster/:monster', function(req, res, next){

    var data = {
        'collection': 'Monsters',
        'query': {
            "Name": req.params.monster
        }
    };

    MongoClient.connect(url, function(err, db){

        assert.equal(null, err);

        var monster = Services.getItem(db, data, function(item) {
            console.log('Monster Found: ' + item);
            db.close();

            res.json(item);
        });

    });


});


module.exports = MonsterRouter;