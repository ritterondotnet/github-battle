'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
require('./index.css');

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));