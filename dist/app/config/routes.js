'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Main = require('../components/Main/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Home = require('../components/Home/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Profile = require('../components/Profile/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _index = require('../components/Github/index');

var _index2 = _interopRequireDefault(_index);

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../assets/css/index.css');

var history = (0, _createBrowserHistory2.default)();

var Routes = function (_React$Component) {
  _inherits(Routes, _React$Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        { history: history },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'ul',
            { className: 'languages' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' },
                'Home'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/Main' },
                'Main'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/Profile' },
                'Profile'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/Github' },
                'Github'
              )
            )
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/Main', component: _Main2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/Profile', component: _Profile2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/Github', component: _index2.default })
        )
      );
    }
  }]);

  return Routes;
}(_react2.default.Component);

module.exports = Routes;