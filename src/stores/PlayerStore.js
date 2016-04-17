var Dispatcher = require('../dispatcher/Dispatcher');
var PlayerActionTypes = require('../const/PlayerActionTypes');
var Store = require('../lib/Store');
var assign = require('object-assign');

var isloading = false;
var playerInfo = null;

function updatePlayerInfo(data){
    playerInfo = data;
}

function setIsLoading(loading){
    isloading = !!loading;
}


var PlayerStore = assign({}, Store, {

        getPlayerInfo: function () {
            return playerInfo;
        },

        isLoading: function (){
            return isLoading;
        }


});

PlayerStore.dispatchToken = Dispatcher.register(function(payload){

    switch(payload.actionType){
        case PlayerActionTypes.PLAYER_LOGIN:
            updatePlayerInfo(payload.data);
            break;
        case PlayerActionTypes.PLAYER_LOGOUT:
            updatePlayerInfo(null);
            break;
        case PlayerActionTypes.PLAYER_REGISTER:
            updatePlayerInfo(payload.data);
    }

    PlayerStore.emitChange();

    return true;
});



module.exports = PlayerStore;

