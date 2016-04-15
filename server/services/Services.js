var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


var MonsterServices = {

    addItem: function(db, data, callback){

        db.collection(data.collection).insert(data.item, function(err, result){
            callback(result);
        });

    },

    getItem: function(db, data, callback){

        var collection = db.collection(data.collection);

        var item = collection.find(data.query).toArray(function(err, item){
            callback(item);
        });

    },

    deleteItem: function(db, data, callback){

        var collection = db.collection(data.collection);

        var item = collection.remove(data.item)

    },

    updateItem: function(db, data, upsert, callback){

        var upsertOption = {upsert :!!upsert};

        var collection = db.collection(data.collection);

        var item = collection.update(data.item, data.update, upsertOption, function(err, result){
            callback(item);
        })

    }

};

module.exports = MonsterServices;