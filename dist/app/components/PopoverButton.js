"use strict";

var _core = require("@blueprintjs/core");

var menu = React.createElement(
  _core.Menu,
  null,
  React.createElement(_core.MenuItem, { text: "New" }),
  React.createElement(_core.MenuItem, { text: "Open" }),
  React.createElement(_core.MenuItem, { text: "Save" }),
  React.createElement(_core.MenuDivider, null),
  React.createElement(_core.MenuItem, { text: "Settings..." })
);

var PopoverButton = {
  render: React.createElement(
    _core.Popover,
    { content: menu, position: _core.Position.BOTTOM_RIGHT },
    React.createElement(_core.Button, { text: "Actions" })
  )
};

module.exports = PopoverButton;