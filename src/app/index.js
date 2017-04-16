var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

$(function () {
  $('[data-toggle="popover"]').popover();
});

class App extends React.Component{
  render() {
    const name = 'Jim Ritter';
    const img = '';
    const friends = [
    { name: 'Tyler McGinnis', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: true },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false },
    ];
    return (
          <div>
              <NavBar brandTitle="Github Battle"></NavBar>
              <div className="row">
                <div className="col-md-12"></div>
              </div>
              <div className="row">
                <div className="col-md-12"></div>
              </div>
              <div className="row">
                <div className="col-md-12">
                    <FriendsContainer name={ name } friends={ friends } img={ img }></FriendsContainer>
                </div>
              </div>
          </div>
        );
  }
}

class NavBar extends React.Component{
  render() {
    return (
          <nav className="navbar sticky-top navbar-inverse bg-primary">
              <a className="navbar-brand" href="#">{ this.props.brandTitle }</a>
          </nav>
        );
  }
}

class Button extends React.Component{
  render() {
    return (
        <button className="btn btn-primary" type="button">{ this.props.ButtonText }</button>
    );
  }
}

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

class FriendsContainer extends React.Component{
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <label>Name: { this.props.name }</label>
        </div>
        <div className="col-md-9">
          <Users list={ this.props.friends }></Users>
        </div>
      </div>
    );
  }
}

class AddressBlock extends React.Component{
  render() {
    return (
      <address>
        5145 N Susquehanna Trail
        York, PA. 17406
      </address>
    );
  }
}

NavBar.propTypes = {
  brandTitle: PropTypes.string.isRequired,
};

FriendsContainer.propTypes = {
  name: PropTypes.string.isRequired,
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired,
  })),
  img: PropTypes.string.isRequired,
};

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired,
  })),
};

ReactDOM.render(
  <App/>,
    document.getElementById('app')
);
