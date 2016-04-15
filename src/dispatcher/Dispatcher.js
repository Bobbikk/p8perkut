'use strict';

var fluxDispatcher = require('flux').Dispatcher;
var assign = require('object-assign');


var Dispatcher = assign({}, fluxDispatcher);

module.exports = Dispatcher;

