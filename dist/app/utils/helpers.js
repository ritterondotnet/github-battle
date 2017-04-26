'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRepos(username) {
  return _axios2.default.get('https://api.github.com/users/' + username + '/repos');
}


function getUserInfo(username) {
  return _axios2.default.get('https://api.github.com/users/' + username);
}

var Helpers = {
  Languages: ['All', 'C#', 'Go', 'ReactJs', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'Shell', 'C', 'Perl', 'HTML', 'PHP', 'Rust', 'TypeScript'],
  getGithubInfo: function getGithubInfo(username) {
    return _axios2.default.all([getRepos(username), getUserInfo(username)]).then(function (arr) {
      return {
        repos: arr[0].data,
        bio: arr[1].data
      };
    });
  }
};

exports.default = Helpers;