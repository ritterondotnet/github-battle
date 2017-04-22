var React = require('react');
var PropTypes = require('prop-types');
var Users = require('./components/Users');

class FriendsContainer extends React.Component{
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <label>Name: { this.props.name }</label>
        </div>
        <div className="col-md-9">
          <Users list={ this.props.friends } />
        </div>
      </div>
    );
  }
}

FriendsContainer.propTypes = {
  name: PropTypes.string.isRequired,
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired,
  })),
  img: PropTypes.string.isRequired,
};

module.exports = FriendsContainer;
