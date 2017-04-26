'use strict';

var axios = require('axios');

module.exports = {
  fetchPopularRepos: function fetchPopularRepos(language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=all');
    return axios.get(encodedURI).then(function (response) {
      return response.data.items;
    }).catch(function (e) {
      console.log(e);
    });
  }
};