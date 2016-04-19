var StateActionTypes = require('../const/StateActionTypes');
var Dispatcher = require('../dispatcher/Dispatcher');

var StateActions = {

    togglePlayerStateModal: function(){

        Dispatcher.dispatch({
            actionType: StateActionTypes.TOGGLE_PLAYER_STATE_MODAL
        })

    }

};