var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Attributes = new Schema({
    HP: {
        type: Number,
        required: true
    },
    strength: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    magic: {
        type: Number,
        required: true
    },
    knowledge: {
        type: Number,
        required: true
    }
});

var Player = new Schema({
    username: {
        type:String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    attributes: {
        type: Attributes,
        required: true
    },
    items: Array,
    level: {
        type: Number,
        required: true
    },
    toNextLevel: {
        type: Number,
        required: true
    },
});

Player.plugin(passportLocalMongoose);

module.exports = mongoose.model('Player', Player);