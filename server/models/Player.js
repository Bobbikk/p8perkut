var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Player = new Schema({
    username: String,
    password: String,
    class: String,
    attributes: {
        HP: Number,
        strength: Number,
        speed: Number,
        magic: Number,
        knowledge: Number
    },
    items: Array,
    level: Number,
    toNextLevel: Number
});

Player.plugin(passportLocalMongoose);

module.exports = mongoose.model('Player', Player);