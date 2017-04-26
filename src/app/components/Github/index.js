/* @flow */
import React from 'react';
import Repositories from './Repositories';
import Helpers from '../../utils/helpers';
require('../../assets/css/index.css');

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: Helpers.Languages
    };
    console.log(this.state.languages);
  }
  render() {
    return (
      <div>
        <Repositories languages={this.state.languages} />
      </div>
    );
  }
}

module.exports = Index;
