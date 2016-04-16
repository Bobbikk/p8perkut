'use strict';
var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');



var Store = (function(){
    function Store(){

        this.CHANGE_EVENT = 'change';

    }
    Store.prototype.emitChange = function(){
        this.emit(this.CHANGE_EVENT);
    };

    Store.prototype.addChangeListener = function(callback){
        this.on(this.CHANGE_EVENT, callback);
    };

    Store.prototype.removeChangeListener = function(callback){
        this.removeListener(this.CHANGE_EVENT, callback);
    };

    return Store;
});



module.exports = Store;