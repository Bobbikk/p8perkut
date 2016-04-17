var React = require('react');
var Router = require('react-router');

var Welcome = React.createClass({

    contextTypes:{
        router: React.PropTypes.object
    },

    toLogin: function(){
        this.context.router.push('/login');
    },

    toRegister: function(){
        this.context.router.push('/register');
    },

    render: function(){

        return(
            <div className="welcome-container">
                <h1 className="welcome-title">Greetings, traveller</h1>
                <h3 className="welcome-message">Don't I know you?</h3>
                <div className="actions-menu">
                <button className="action-button pink" onClick={this.toLogin}>Yes</button>
                <button className="action-button pink" onClick={this.toRegister}>I don't think so...</button>
                    </div>
            </div>
        )
    }

});

module.exports = Welcome;