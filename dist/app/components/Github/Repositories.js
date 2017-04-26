'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');
var api = require('../../utils/api');
var Helpers = require('../../utils/helpers');
require('../../assets/css/index.css');

/*
 - Create a select list to display the list of programming language types
 */

var LanguageSelectList = function (_React$Component) {
  _inherits(LanguageSelectList, _React$Component);

  function LanguageSelectList(props) {
    _classCallCheck(this, LanguageSelectList);

    var _this = _possibleConstructorReturn(this, (LanguageSelectList.__proto__ || Object.getPrototypeOf(LanguageSelectList)).call(this, props));

    _this.state = {
      value: 'select'
    };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(LanguageSelectList, [{
    key: 'onChange',
    value: function onChange(event) {
      this.setState({ value: event.target.value });
      console.log(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'pt-select' },
        React.createElement(
          'select',
          { onChange: this.props.onChange, value: this.state.value },
          this.props.languages.map(function (lang) {
            return React.createElement(
              'option',
              {
                value: lang,
                style: lang === _this2.props.selectedLanguage ? { color: '#d0021b' } : null,
                key: lang },
              lang
            );
          })
        )
      );
    }
  }]);

  return LanguageSelectList;
}(React.Component);

function RepoGrid(props) {
  return React.createElement(
    'ul',
    { className: 'popular-list' },
    props.repos.map(function (repo, index) {
      return React.createElement(
        'li',
        { key: repo.name, className: 'popular-item' },
        React.createElement(
          'div',
          { className: 'popular-rank' },
          '#',
          index + 1
        ),
        React.createElement(
          'ul',
          { className: 'space-list-items' },
          React.createElement(
            'li',
            null,
            React.createElement('img', {
              className: 'avatar',
              src: repo.owner.avatar_url,
              alt: 'Avatar for ' + repo.owner.login
            })
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: repo.html_url },
              repo.name
            )
          ),
          React.createElement(
            'li',
            null,
            '@',
            repo.owner.login
          ),
          React.createElement(
            'li',
            null,
            repo.stargazers_count,
            ' stars'
          )
        )
      );
    })
  );
}

/*
 - Default class object for the GitHub repositories component
 - Get the list of GitHub repositories based on the selected language type.
 - Defaults to All
 */

var Repositories = function (_React$Component2) {
  _inherits(Repositories, _React$Component2);

  function Repositories(props) {
    _classCallCheck(this, Repositories);

    var _this3 = _possibleConstructorReturn(this, (Repositories.__proto__ || Object.getPrototypeOf(Repositories)).call(this, props));

    _this3.state = {
      languages: props.languages,
      selectedLanguage: 'All'
    };
    _this3.updateLanguage = _this3.updateLanguage.bind(_this3);
    return _this3;
  }

  _createClass(Repositories, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateLanguage(this.state.selectedLanguage);
    }
  }, {
    key: 'updateCurrentTime',
    value: function updateCurrentTime() {
      this.setState({
        currentTime: new Date().toLocaleTimeString()
      });
    }
  }, {
    key: 'updateLanguage',
    value: function updateLanguage(lang) {
      console.log('updateLanguage()');
      this.setState(function () {
        return {
          selectedLanguage: lang,
          repositories: null
        };
      });
      api.fetchPopularRepos(lang).then(function (repos) {
        this.setState(function () {
          return {
            repositories: repos
          };
        });
      }.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-12' },
            React.createElement(LanguageSelectList, {
              languages: this.state.languages,
              onChange: this.updateLanguage
            })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-12' },
            !this.state.repositories ? React.createElement(
              'p',
              null,
              'Loading...'
            ) : React.createElement(RepoGrid, { repos: this.state.repositories })
          )
        )
      );
    }
  }]);

  return Repositories;
}(React.Component);

/*
 - Setup the default property type settings for the Repository component
 */


Repositories.propTypes = {
  languages: PropTypes.array.isRequired
};

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

module.exports = Repositories;