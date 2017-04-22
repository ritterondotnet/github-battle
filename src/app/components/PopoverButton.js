import {
  Button,
  Menu,
  MenuItem,
  MenuDivider,
  Popover,
  Position
} from '@blueprintjs/core';

const menu = (
  <Menu>
    <MenuItem text="New" />
    <MenuItem text="Open" />
    <MenuItem text="Save" />
    <MenuDivider />
    <MenuItem text="Settings..." />
  </Menu>
);

const PopoverButton = {
  render:
    <Popover content={menu} position={Position.BOTTOM_RIGHT}>
      <Button text="Actions" />
    </Popover>
}

module.exports = PopoverButton;
