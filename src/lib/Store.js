'use strict';
var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var Store = assign({}, EventEmitter.prototype, {

        emitChange: function () {
            this.emit(this.CHANGE_EVENT);
        },

        addChangeListener: function (callback) {
            this.on(this.CHANGE_EVENT, callback);
        },

        removeChangeListener: function (callback) {
            this.removeListener(this.CHANGE_EVENT, callback);
        }
    }
);



module.exports = Store;