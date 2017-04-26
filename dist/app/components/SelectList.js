'use strict';

var React = require('react');
var api = require('../utils/api');
var helpers = require('../../../dist/app/utils/helpers');

var showMessage = function showMessage(e) {
  e.preventDefault();
  console.log(e);
  return false;
};

var SelectList = function SelectList(props) {
  return React.createElement(
    'select',
    { className: 'custom-select', onChange: showMessage },
    helpers.Languages.map(function (lang, index) {
      return React.createElement(
        'option',
        {
          value: lang,
          key: index },
        lang
      );
    })
  );
};

module.exports = SelectList;