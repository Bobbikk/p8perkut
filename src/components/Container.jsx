'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var history = require('history');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Login = require('./Login.jsx');
var Welcome = require('./Welcome.jsx');

var appHistory = ReactRouter.browserHistory;

var Container = React.createClass({

    render: function() {
        return (
            <div>
                <Router history={appHistory}>
                    <Route path="/" component={Welcome}>
                        <Route path="register" component={Login}/>
                    </Route>
                </Router>
            </div>
        );
    }

});

module.exports = Container;
