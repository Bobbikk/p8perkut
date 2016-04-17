var PlayerActionTypes = require('../const/PlayerActionTypes');
var Dispatcher = require('../dispatcher/Dispatcher');
var PlayerService = require('../services/PlayerService');

var PlayerActions = {

    registerPlayer: function(data){

        var success = (res) => {

            console.log(res);

            Dispatcher.dispatch({
                actionType: PlayerActionTypes.PLAYER_REGISTER,
                data: res
            })
        };

        var fail = (reason) => {

            console.log(reason);

            Dispatcher.dispatch({
                actionType: PlayerActionTypes.PLAYER_REGISTER_FAILED,
                data: reason
            })
        };

        PlayerService.registerPlayer(data)
            .then(success)
            .catch(fail);

    },
    logInPlayer: function(data){

        var success = (res) => {

            console.log(res);

            Dispatcher.dispatch({
                actionType: PlayerActionTypes.PLAYER_LOGIN,
                data: res
            })
        };

        var fail = (reason) => {

            console.log(reason);

            Dispatcher.dispatch({
                actionType: PlayerActionTypes.PLAYER_LOGIN_FAILED,
                data: reason
            })
        };

        PlayerService.logInPlayer(data)
            .then(success)
            .catch(fail);

    },
    logOutPlayer: function(data){

        var success = (res) => {

            console.log(res);

            Dispatcher.dispatch({
                actionType: PlayerActionTypes.PLAYER_LOGOUT,
                data: res
            })
        };

        var fail = (reason) => {

            console.log(reason);

            Dispatcher.dispatch({
                actionType: PlayerActionTypes.PLAYER_LOGOUT_FAILED,
                data: reason
            })
        };

        PlayerService.logOutPlayer(data)
            .then(success)
            .catch(fail);

    }

};

module.exports = PlayerActions;