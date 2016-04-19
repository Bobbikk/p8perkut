var Store = require('../lib/Store');
var assign = require('object-assign');


var PlayerStateModalOpen = false;

var StateStore = assign({}, Store, {

    isPlayerStateModalOpen: function(){
        return PlayerStateModalOpen;
    }

});

module.exports = StateStore;

