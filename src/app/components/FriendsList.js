/* @flow */
var React = require('react');

function FriendItem (props) {
  return <li>{props.friend}</li>;
}

function FriendsList (props) {
  return (
    <div>
      <h1>Friends:</h1>
      <ul>
        {props.friends.map((friend, index) => <FriendItem friend={friend} key={friend} />)}
      </ul>
    </div>
  );
}

module.exports = FriendsList;
