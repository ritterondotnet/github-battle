/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/routes';
require('./assets/css/index.css');

ReactDOM.render(
  <Routes/>,
  document.getElementById('app')
);
