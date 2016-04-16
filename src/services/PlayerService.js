var Service = require('../lib/Service');
var assign = require('object-assign');

var PlayerService = assign({}, Service.prototype,{

    registerPlayer: (data) => {
        var params = {
            method: "POST",
            url: '/api/player/register',
            data: data
        };

        return PlayerService.request(params);
    },

    logInPlayer: (data) => {

        var params = {
            method: "POST",
            url: 'api/player/login',
            data: data
        };

        return PlayerService.request(params);
    },

    logOutPlayer: () => {

        var params = {
            method: "POST",
            url: 'api/player/logout'
        };

        return PlayerService.request(params);

    }

});

module.exports = PlayerService;