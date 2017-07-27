'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../components/Main/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../components/Home/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../components/Profile/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../components/Github/index');

var _index8 = _interopRequireDefault(_index7);

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          { className: 'container' },
          _react2.default.createElement(
            'nav',
            { className: 'navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse' },
            _react2.default.createElement(
              'button',
              { className: 'navbar-toggler navbar-toggler-right', type: 'button', 'data-toggle': 'collapse',
                'data-target': '#navbarsExampleDefault', 'aria-controls': 'navbarsExampleDefault', 'aria-expanded': 'false',
                'aria-label': 'Toggle navigation' },
              _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'navbar-brand', to: '/' },
              'Ritter Software'
            ),
            _react2.default.createElement(
              'div',
              { className: 'collapse navbar-collapse', id: 'navbarsExampleDefault' },
              _react2.default.createElement(
                'ul',
                { className: 'navbar-nav mr-auto' },
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { className: 'nav-link', to: '/' },
                    'Home',
                    _react2.default.createElement(
                      'span',
                      { className: 'sr-only' },
                      '(current)'
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { className: 'nav-link', to: '/Main' },
                    'Main'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { className: 'nav-link disabled', to: '/Profile' },
                    'Profile'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item dropdown' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link dropdown-toggle', href: '#', id: 'dropdown01', 'data-toggle': 'dropdown',
                      'aria-haspopup': 'true', 'aria-expanded': 'false' },
                    'Examples'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'dropdown-menu', 'aria-labelledby': 'dropdown01' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { className: 'dropdown-item', to: '/Github' },
                      'Github Battle'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _index4.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/Main', component: _index2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/Profile', component: _index6.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/Github', component: _index8.default })
        )
      );
    }
  }]);

  return Routes;
}(_react2.default.Component);

module.exports = Routes;