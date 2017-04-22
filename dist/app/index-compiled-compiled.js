'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
var Clock = require('./Clock');
require('./index.css');

$(function () {
  $('[data-toggle="popover"]').popover();
});

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var name = 'Jim Ritter';
      var img = '';
      var friends = [{ name: 'Tyler McGinnis', friend: true }, { name: 'Ryan', friend: true }, { name: 'Michael', friend: true }, { name: 'Mikenzi', friend: false }, { name: 'Jessica', friend: true }, { name: 'Dan', friend: false }];
      return React.createElement('div', null, React.createElement(NavBar, { brandTitle: 'Github Battle' }), React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-md-12' })), React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-md-12' })), React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-md-12' }, React.createElement(FriendsContainer, { name: name, friends: friends, img: img }))));
    }
  }]);

  return App;
}(React.Component);

var NavBar = function (_React$Component2) {
  _inherits(NavBar, _React$Component2);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: 'render',
    value: function render() {
      return React.createElement('nav', { className: 'navbar sticky-top navbar-inverse bg-primary' }, React.createElement('a', { className: 'navbar-brand', href: '#' }, this.props.brandTitle));
    }
  }]);

  return NavBar;
}(React.Component);

var Users = function (_React$Component3) {
  _inherits(Users, _React$Component3);

  function Users() {
    _classCallCheck(this, Users);

    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
  }

  _createClass(Users, [{
    key: 'render',
    value: function render() {

      var friends = this.props.list.filter(function (user) {
        return user.friend === true;
      });

      var nonFriends = this.props.list.filter(function (user) {
        return user.friend === false;
      });

      return React.createElement('div', null, React.createElement('label', null, React.createElement('b', null, 'Friends')), React.createElement('ul', { className: 'list-group' }, friends.map(function (user) {
        return React.createElement('li', { className: 'list-group-item', key: user.name }, ' ', user.name, ' ');
      })), React.createElement('hr', null), React.createElement('label', null, React.createElement('b', null, 'Non Friends')), React.createElement('ul', { className: 'list-group' }, nonFriends.map(function (user) {
        return React.createElement('li', { className: 'list-group-item', key: user.name }, ' ', user.name, ' ');
      })));
    }
  }]);

  return Users;
}(React.Component);

var FriendsContainer = function (_React$Component4) {
  _inherits(FriendsContainer, _React$Component4);

  function FriendsContainer() {
    _classCallCheck(this, FriendsContainer);

    return _possibleConstructorReturn(this, (FriendsContainer.__proto__ || Object.getPrototypeOf(FriendsContainer)).apply(this, arguments));
  }

  _createClass(FriendsContainer, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'row' }, React.createElement('div', { className: 'col-md-3' }, React.createElement('label', null, 'Name: ', this.props.name)), React.createElement('div', { className: 'col-md-9' }, React.createElement(Users, { list: this.props.friends })));
    }
  }]);

  return FriendsContainer;
}(React.Component);

var AddressBlock = function (_React$Component5) {
  _inherits(AddressBlock, _React$Component5);

  function AddressBlock() {
    _classCallCheck(this, AddressBlock);

    return _possibleConstructorReturn(this, (AddressBlock.__proto__ || Object.getPrototypeOf(AddressBlock)).apply(this, arguments));
  }

  _createClass(AddressBlock, [{
    key: 'render',
    value: function render() {
      return React.createElement('address', null, '5145 N Susquehanna Trail York, PA. 17406');
    }
  }]);

  return AddressBlock;
}(React.Component);

NavBar.propTypes = {
  brandTitle: PropTypes.string.isRequired
};

FriendsContainer.propTypes = {
  name: PropTypes.string.isRequired,
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  })),
  img: PropTypes.string.isRequired
};

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

//# sourceMappingURL=index-compiled.js.map

//# sourceMappingURL=index-compiled-compiled.js.map