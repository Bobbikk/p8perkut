var keyMirror = require('keyMirror');

var PlayerActionTypes = keyMirror({
    PLAYER_LOGIN: null,
    PlAYER_LOGIN_FAILED: null,
    PLAYER_REGISTER: null,
    PLAYER_REGISTER_FAILED: null,
    PLAYER_LOGOUT: null,
    PLAYER_LOGOUT_FAILED: null
});

module.exports = PlayerActionTypes;

