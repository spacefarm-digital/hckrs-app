import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Text } from 'rebass'

import Menu, { MenuItem } from 'material-ui/Menu'

import AccountCircleIcon from 'material-ui-icons/AccountCircle'

import IconButton from 'material-ui/IconButton'

class ProfileMenu extends Component {
  state = {
    anchorEl: null,
    open: false,
  }

  openProfileMenu = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }
  render() {
    return (
      <div>
        <IconButton aria-label="Profile" onClick={this.openProfileMenu}>
          <AccountCircleIcon color="#ffffff" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem
            component={Link}
            to="/profile"
            onClick={this.handleRequestClose}
          >
            My Profile
          </MenuItem>
          <MenuItem onClick={this.handleRequestClose}>My Challenges</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>My Hacks</MenuItem>
          <MenuItem color="error" onClick={this.handleRequestClose}>
            <Text bold color="red">
              Log out
            </Text>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
export default ProfileMenu
