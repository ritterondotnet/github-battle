'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');

var Users = function (_React$Component) {
  _inherits(Users, _React$Component);

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

      return React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          null,
          React.createElement(
            'b',
            null,
            'Friends'
          )
        ),
        React.createElement(
          'ul',
          { className: 'list-group' },
          friends.map(function (user) {
            return React.createElement(
              'li',
              { className: 'list-group-item', key: user.name },
              ' ',
              user.name,
              ' '
            );
          })
        ),
        React.createElement('hr', null),
        React.createElement(
          'label',
          null,
          React.createElement(
            'b',
            null,
            'Non Friends'
          )
        ),
        React.createElement(
          'ul',
          { className: 'list-group' },
          nonFriends.map(function (user) {
            return React.createElement(
              'li',
              { className: 'list-group-item', key: user.name },
              ' ',
              user.name,
              ' '
            );
          })
        )
      );
    }
  }]);

  return Users;
}(React.Component);

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
};

module.exports = Users;