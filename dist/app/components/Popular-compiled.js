'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
var PropTypes = require('prop-types');
var Clock = require('./Clock');

var languages = ['All', 'C#', 'Go', 'ReactJs', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

var SelectLanguage = function SelectLanguage(props) {
  return React.createElement('ul', { className: 'languages' }, languages.map(function (lang) {
    return React.createElement('li', {
      style: lang === props.selectedLanguage ? { color: '#d0021b' } : null,
      onClick: props.onSelect.bind(null, lang),
      key: lang }, lang);
  }));
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

var Popular = function (_React$Component) {
  _inherits(Popular, _React$Component);

  function Popular(props) {
    _classCallCheck(this, Popular);

    var _this = _possibleConstructorReturn(this, (Popular.__proto__ || Object.getPrototypeOf(Popular)).call(this, props));

    _this.state = {
      selectedLanguage: 'All'
    };
    _this.updateLanguage = _this.updateLanguage.bind(_this);
    return _this;
  }

  _createClass(Popular, [{
    key: 'updateLanguage',
    value: function updateLanguage(lang) {
      this.setState(function () {
        return {
          selectedLanguage: lang
        };
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('Component Will Mount');
      return true;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('Component Did Mount');
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', null, React.createElement(SelectLanguage, {
        selectedLanguage: this.state.selectedLanguage,
        onSelect: this.updateLanguage
      }));
    }
  }]);

  return Popular;
}(React.Component);

module.exports = Popular;

//# sourceMappingURL=Popular-compiled.js.map