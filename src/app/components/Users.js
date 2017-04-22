var React = require('react');
var PropTypes = require('prop-types');

class Users extends React.Component {
  render() {

    let friends = this.props.list.filter(function (user) {
      return user.friend === true;
    });

    let nonFriends = this.props.list.filter(function (user) {
      return user.friend === false;
    });

    return (
      <div>
        <label><b>Friends</b></label>
        <ul className="list-group">
          {
            friends.map(function (user) {
              return <li className="list-group-item" key={ user.name }> { user.name } </li>;
            })
          }
        </ul>

        <hr />

        <label><b>Non Friends</b></label>
        <ul className="list-group">
          {
            nonFriends.map(function (user) {
              return <li className="list-group-item" key={ user.name }> { user.name } </li>;
            })
          }
        </ul>
      </div>
    );
  }
}

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
};

module.exports = Users;
