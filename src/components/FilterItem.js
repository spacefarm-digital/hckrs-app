/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'
import PropTypes from 'prop-types'
import Menu, { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'

import { Text } from 'rebass'

const options = ['⏳ Upcoming', '✅ Active', '🕐 Past']
class FilterItem extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    selectedIndex: 1,
  }
  button = undefined
  handleClickListItem = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }
  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, open: false })
  }
  handleRequestClose = () => {
    this.setState({ open: false })
  }
  render() {
    return (
      <div>
        <Button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="When device is locked"
          onClick={this.handleClickListItem}
          raised
        >
          {options[this.state.selectedIndex]}
        </Button>

        <Menu
          id="lock-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}
export default FilterItem
