'use strict';

var React = require('react');
import { Router, Route, browserHistory} from 'react-router';
var Login = require('./Login.jsx');
var Welcome = require('./Welcome.jsx');


var Container = React.createClass({

    render: function() {
        return (
                <Router history={browserHistory}>
                    <Route path="/" component={Welcome}/>
                    <Route path="/register" component={Login} />
                </Router>
        );
    }

});

module.exports = Container;
