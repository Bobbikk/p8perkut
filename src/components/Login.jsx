'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var PlayerActions = require('../actions/PlayerActions');
var PlayerStore = require('../stores/PlayerStore');

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

    submitUser: function(){

        var data = {
            username: this.state.username,
            password: this.state.password
        };

        PlayerActions.logInPlayer(data);

    },

    logOut: function(){
        PlayerActions.logOutPlayer();
    },

    registerUser: function(){
        var data = {
            username: this.state.username,
            password: this.state.password,
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
        };


        PlayerActions.registerPlayer(data);
    },

    render: function() {
        return (
            <div>
                <p>Greetings Dungeoneer (Login)</p>

                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           name="username"
                           value={this.username}
                           placeholder="What is yourusername"
                           onChange={this.handleUserChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input type="text"
                           name="password"
                           placeholder="Enter your"
                           onChange={this.handlePasswordChange}
                    />
                    <button type="button" onClick={this.submitUser}>Register</button>
                </form>

                <p>Have we not met before? (Register)</p>

                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           name="username"
                           value={this.username}
                           placeholder="Pick a username"
                           onChange={this.handleUserChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input type="text"
                           name="password"
                           placeholder="Pick a password"
                           onChange={this.handlePasswordChange}
                    />
                    <button type="button" onClick={this.registerUser}>Register</button>
                </form>

                <button type="button" onClick={this.logOut}>Log out</button>

            </div>
        );
    }

});

module.exports = Login;
