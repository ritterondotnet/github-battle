'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./../index.css');

var Clock = function Clock(props) {
  return React.createElement(
    'div',
    { className: 'row' },
    React.createElement(
      'div',
      { className: 'col-md-12' },
      React.createElement(
        'small',
        null,
        'The current time is ',
        props.date.toLocaleTimeString(),
        ' EST'
      )
    )
  );
};

Clock.propTypes = {
  date: PropTypes.instanceOf(Date)
};

function tick() {
  ReactDOM.render(React.createElement(Clock, { date: new Date() }), document.getElementById('clock'));
}

setInterval(tick, 1000);

module.exports = Clock;

//# sourceMappingURL=Clock-compiled.js.map