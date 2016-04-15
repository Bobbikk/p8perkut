'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var PlayerActions = require('../actions/PlayerActions');

var Login = React.createClass({

    getInitialState: function(){
        return{
            username: null,
            password: null,
            class: 'Paladin',
            attributes: {
                HP: 30,
                strength: 5,
                speed: 5,
                magic: 2,
                knowledge: 3
            },
            items: {},
            level: 1,
            toNextLevel: 30
        }
    },

    handleUserChange: function(){

        this.setState({
            username: e.target.value
        });

    },

    handlePasswordChange: function(){

        this.setState({
            password: e.target.value
        })

    },

    submitUser: function(){

        var data = {
            username: this.state.username,
            password: this.state.password,
            class: 'Paladin',
            HP: 30,
            strength: 5,
            speed: 5,
            magic: 2,
            knowledge: 3,
            items: {},
            level: 1,
            toNextLevel: 30
        };

        PlayerActions.registerPlayer(data);

    },

    render: function() {
        return (
            <div>
                <p>What is your name, Dungeoneer?</p>

                <form>
                    <label for="username">Username</label>
                    <input type="text" name="username" value={this.username} placeholder="Pick a username" />
                    <label for="password">Password</label>
                    <input type="text" name="password" placeholder="Pick a password" />
                    <button type="button" onClick={this.handleUserChange}>Register</button>
                </form>

            </div>
        );
    }

});

module.exports = Login;
