/* @flow */
var React = require('react');
var Popular = require('./Popular');
var SelectList = require('./SelectList');
var PopoverButton = require('./PopoverButton');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentDidMount () {
    this.onSuccess();
  }
  onSuccess () {
    this.setState({loaded: true});
    console.log('The state of loaded = ' + this.state.loaded);
  }
  onError (err) {
    console.log(err);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SelectList props={this.props}></SelectList>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Popular />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <PopoverButton/>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
