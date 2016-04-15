var Service = require('../lib/Service');
var assign = require('object-assign');

PlayerService = assign({}, Service.prototype, function(){

    return {

        registerPlayer: (data) => {

            var params = {
                method: "POST",
                url: '/api/player/register',
                data: data
            };

            return this.request(params)
        }
    }
});


module.exports = PlayerService;