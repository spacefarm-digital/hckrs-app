import React from 'react'
import Menu, { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'

import { Label } from 'rebass'

class FilterItem extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    selectedIndex: 0,
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
        {this.props.label ? <Label mb={2}>{this.props.label}</Label> : null}
        <Button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="When device is locked"
          onClick={this.handleClickListItem}
          raised
          color="grey"
        >
          {this.props.options[this.state.selectedIndex]}
        </Button>
        <Menu
          id="lock-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          {this.props.options.map((option, index) => (
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
