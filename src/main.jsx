'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('./Router.jsx');
require('./styles/paperkut.scss');

ReactDOM.render(
    <Router />,
    document.getElementById('content')
);
