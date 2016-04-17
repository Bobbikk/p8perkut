'use strict';

var React = require('react');
import { Router, Route, browserHistory} from 'react-router';
var Login = require('./components/Login.jsx');
var Welcome = require('./components/Welcome.jsx');
var Register = require('./components/Register.jsx');


var AppRouter = React.createClass({

    render: function() {
        return (
            <section className="container">
            <Router history={browserHistory}>
                <Route path="/" component={Welcome}/>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Router>
            </section>
        );
    }

});

module.exports = AppRouter;
