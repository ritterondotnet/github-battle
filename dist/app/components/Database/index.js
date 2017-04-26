'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _firebase = require('firebase');

var firebase = _interopRequireWildcard(_firebase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  apiKey: 'AIzaSyCEiG1aq7T4JSlWFW5jsCAbHRWtn5Voxq4',
  authDomain: 'https://github-battle-215e7.firebaseapp.com',
  databaseURL: 'https://github-battle-215e7.firebaseio.com',
  storageBucket: 'gs://github-battle-215e7.appspot.com'
};


var fb = firebase.initializeApp(config).database().ref();

var App = function App(props) {
  console.log('snapshot', props);
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'My Prototype'
    ),
    _react2.default.createElement(
      'p',
      null,
      JSON.stringify(props)
    )
  );
};

fb.on('value', function (snapshot) {
  var store = snapshot.val();
  _reactDom2.default.render(_react2.default.createElement(App, store), document.getElementById('root'));
});