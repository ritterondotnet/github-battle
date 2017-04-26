/* @flow */
var React = require('react');
var PropTypes = require('prop-types');
var api = require('../../utils/api');
var Helpers = require('../../utils/helpers');
require('../../assets/css/index.css');

/*
 - Create a select list to display the list of programming language types
 */
class LanguageSelectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'select'
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="pt-select">
        <select onChange={this.props.onChange} value={this.state.value}>
          {
            this.props.languages.map((lang) => {
              return (
                <option
                  value={lang}
                  style={lang === this.props.selectedLanguage ? {color: '#d0021b'} : null}
                  key={lang}>
                  {lang}
                </option>
              );
            })
          }
        </select>
      </div>
    );
  }
}

function RepoGrid (props) {
  return (
    <ul className="popular-list">
      {props.repos.map(function (repo, index) {
        return (
          <li key={ repo.name } className="popular-item">
            <div className="popular-rank">#{ index + 1 }</div>
            <ul className="space-list-items">
              <li>
                <img
                  className='avatar'
                  src={ repo.owner.avatar_url }
                  alt={'Avatar for ' + repo.owner.login }
                />
              </li>
              <li><a href={ repo.html_url}>{ repo.name }</a></li>
              <li>@{ repo.owner.login }</li>
              <li>{ repo.stargazers_count } stars</li>
            </ul>
          </li>
        );
      })
      }
    </ul>
  );
}

/*
 - Default class object for the GitHub repositories component
 - Get the list of GitHub repositories based on the selected language type.
 - Defaults to All
 */
class Repositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: props.languages,
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateCurrentTime() {
    this.setState({
      currentTime: (new Date()).toLocaleTimeString()
    });
  }
  updateLanguage(lang) {
    console.log('updateLanguage()');
    this.setState(function () {
      return {
        selectedLanguage: lang,
        repositories: null
      };
    });
    api.fetchPopularRepos(lang)
      .then(function (repos) {
        this.setState(function () {
          return {
            repositories: repos
          };
        });
      }.bind(this));
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <LanguageSelectList
              languages={this.state.languages}
              onChange={this.updateLanguage}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            { !this.state.repositories ? <p>Loading...</p> : <RepoGrid repos={ this.state.repositories } /> }
          </div>
        </div>
      </div>
    );
  }
}

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
