'use strict';

var React = require('react');
var api = require('../utils/api');

var languages = ['All', 'C#', 'Go', 'ReactJs', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'Shell', 'C', 'VimL', 'Perl', 'HTML', 'Vim Script', 'PHP', 'Rust', 'TypeScript', 'Scala', 'Elixir'];

var showMessage = function showMessage(e) {
  e.preventDefault();
  console.log(e);
  return false;
};

var SelectList = function SelectList(props) {
  return React.createElement(
    'select',
    { className: 'custom-select', onChange: showMessage },
    languages.map(function (lang, index) {
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