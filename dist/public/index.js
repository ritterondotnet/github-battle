'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./../app/components/App');
require('./../app/assets/css/index.css');

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));