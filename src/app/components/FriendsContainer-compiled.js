'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');
var Users = require('./components/Users');

var FriendsContainer = function (_React$Component) {
  _inherits(FriendsContainer, _React$Component);

  function FriendsContainer() {
    _classCallCheck(this, FriendsContainer);

    return _possibleConstructorReturn(this, (FriendsContainer.__proto__ || Object.getPrototypeOf(FriendsContainer)).apply(this, arguments));
  }

  _createClass(FriendsContainer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col-md-3' },
          React.createElement(
            'label',
            null,
            'Name: ',
            this.props.name
          )
        ),
        React.createElement(
          'div',
          { className: 'col-md-9' },
          React.createElement(Users, { list: this.props.friends })
        )
      );
    }
  }]);

  return FriendsContainer;
}(React.Component);

FriendsContainer.propTypes = {
  name: PropTypes.string.isRequired,
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  })),
  img: PropTypes.string.isRequired
};

module.exports = FriendsContainer;

//# sourceMappingURL=FriendsContainer-compiled.js.map