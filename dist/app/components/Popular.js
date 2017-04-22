'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

var languages = ['All', 'C#', 'Go', 'ReactJs', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'Shell', 'C', 'VimL', 'Perl', 'HTML', 'Vim Script', 'PHP', 'Rust', 'TypeScript', 'Scala', 'Elixir'];

var SelectLanguage = function SelectLanguage(props) {
  return React.createElement(
    'ul',
    { className: 'languages' },
    languages.map(function (lang) {
      return React.createElement(
        'li',
        {
          style: lang === props.selectedLanguage ? { color: '#d0021b' } : null,
          onClick: props.onSelect.bind(null, lang),
          key: lang },
        lang
      );
    })
  );
};

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

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
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
      selectedLanguage: 'All',
      repos: null
    };
    _this.updateLanguage = _this.updateLanguage.bind(_this);
    return _this;
  }

  _createClass(Popular, [{
    key: 'updateLanguage',
    value: function updateLanguage(lang) {
      this.setState(function () {
        return {
          selectedLanguage: lang,
          repos: null
        };
      });

      api.fetchPopularRepos(lang).then(function (repos) {
        this.setState(function () {
          return {
            repos: repos
          };
        });
      }.bind(this));
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
      this.updateLanguage(this.state.selectedLanguage);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(SelectLanguage, {
          selectedLanguage: this.state.selectedLanguage,
          onSelect: this.updateLanguage
        }),
        !this.state.repos ? React.createElement(
          'p',
          null,
          'Loading...'
        ) : React.createElement(RepoGrid, { repos: this.state.repos })
      );
    }
  }]);

  return Popular;
}(React.Component);

module.exports = Popular;