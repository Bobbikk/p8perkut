'use strict';

var React = require('react');
import {Link} from 'react-router';

var PlayerActions = require('../actions/PlayerActions');
var PlayerStore = require('../stores/PlayerStore');

var Login = React.createClass({

    getInitialState: function(){
        return {
            username: null,
            password: null
        }
    },

    componentDidMount: function(){
        PlayerStore.addChangeListener(this.updatePlayer);
    },

    componentWillUnmount: function(){
        PlayerStore.removeChangeListener(this.updatePlayer);
    },

    updatePlayer: function(){

      this.setState({
          playerInfo: PlayerStore.getPlayerInfo()
      });

    },

    handleUserChange: function(e){

        this.setState({
            username: e.target.value
        });

    },

    handlePasswordChange: function(e){

        this.setState({
            password: e.target.value
        })

    },

    logIn: function(){

        var data = {
            username: this.state.username,
            password: this.state.password
        };

        PlayerActions.logInPlayer(data);

    },


    render: function() {
        return (
            <div className="login">
                <h1 className="heading">I thought so. Remind me of your name...</h1>

                <form className="login__form">
                    <input type="text"
                           name="username"
                           className="input__username"
                           value={this.username}
                           placeholder="username"
                           onChange={this.handleUserChange}
                    />
                    <input type="password"
                           name="password"
                           className="input__password"
                           placeholder="password"
                           onChange={this.handlePasswordChange}
                    />
                    <div className="actions-menu">
                        <button className="action-button blue" type="button" onClick={this.logIn}>Log In</button>
                        <Link className="action-button blue" to="/">Back</Link>
                    </div>
                </form>
            </div>
        );
    }

});

module.exports = Login;
