var React = require('react');
var PropTypes = require('prop-types');

class NavBar extends React.Component{
  render() {
    return (
      <nav className="navbar sticky-top navbar-inverse bg-primary">
        <a className="navbar-brand" href="#">{ this.props.brandTitle }</a>
      </nav>
    );
  }
}

NavBar.propTypes = {
  brandTitle: PropTypes.string.isRequired
};

module.exports = NavBar;
