/* @flow */
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./../index.css');

const Clock = (props) => (
  <div className="row">
    <div className="col-md-12">
      <small>The current time is { props.date.toLocaleTimeString() } EST</small>
    </div>
  </div>
);

Clock.propTypes = {
  date: PropTypes.instanceOf(Date)
};

function tick() {
  ReactDOM.render(
    <Clock date={ new Date() }/>,
    document.getElementById('clock')
  );
}

setInterval(tick, 1000);

module.exports = Clock;
