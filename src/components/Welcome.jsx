var React = require('react');
var Router = require('react-router');

var Welcome = React.createClass({

    handleClick: function(){
        this.history.push('/login');
    },

    render: function(){

        return(
            <div>
                <p>Welcome watchers of illusion to the castle of confusion!</p>
                <button onclick={this.handleClick}>Introduce yourself, dungeoneer...</button>
                {this.props.children}
            </div>
        )
    }

});

module.exports = Welcome;