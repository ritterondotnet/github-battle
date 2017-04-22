'use strict';

var React = require('react');

function FriendItem(props) {
  return React.createElement(
    'li',
    null,
    props.friend
  );
}

function FriendsList(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Friends:'
    ),
    React.createElement(
      'ul',
      null,
      props.friends.map(function (friend, index) {
        return React.createElement(FriendItem, { friend: friend, key: friend });
      })
    )
  );
}

module.exports = FriendsList;

//# sourceMappingURL=FriendsList-compiled.js.map