var PlayerActionTypes = require('../const/PlayerActionTypes');
var Dispatcher = require('../dispatcher/Dispatcher');
var PlayerService = require('../services/PlayerService');

PlayerActions = {

    registerPlayer: function(data){

        var success = (res) => {

            Dispatcher.dispatch({
                actionType: PlayerActionTypes.PLAYER_REGISTER,
                data: res
            })
        };

        var fail = (reason) => {

            Dispatcher.dispatch({
                actionType: PlayerActionTypes.PLAYER_REGISTER_FAILED,
                data: reason
            })
        };

        PlayerService.registerPlayer(data)
            .then(success)
            .catch(fail);

    }

};