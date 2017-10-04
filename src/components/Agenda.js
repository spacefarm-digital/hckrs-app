import React from 'react'
import PropTypes from 'prop-types'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import PrettyPaper from './extended/PrettyPaper'
import Collapse from 'material-ui/transitions/Collapse'
import DateRangeIcon from 'material-ui-icons/DateRange'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'

import { Flex, Heading, Box } from 'rebass'

import { withTheme } from 'material-ui/styles'

import PrettyLink from '../components/extended/PrettyLink'

class Agenda extends React.Component {
  state = { open: false }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <PrettyPaper mb={4}>
        <List
          subheader={
            <Box bg="p50" color="pA700">
              <Heading is="h2" f={3} p={3}>
                Agenda
              </Heading>
            </Box>
          }
        >
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <DateRangeIcon />
            </ListItemIcon>
            <Flex justify="space-between" w={1}>
              <Heading is="h3" f={2}>
                Friday, 14
              </Heading>
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </Flex>
          </ListItem>
          <Collapse
            in={this.state.open}
            transitionDuration="auto"
            unmountOnExit
          >
            <ListItem button>
              <Flex align="flex-start">
                <Heading is="h4" f={[2, 3]} pt={1} color="sA700">
                  10.00
                </Heading>
                <ListItemText
                  primary="Breakfast + coffee
"
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.
"
                />
              </Flex>
            </ListItem>
            <ListItem button>
              <Flex align="flex-start">
                <Heading is="h4" f={[2, 3]} pt={1} color="sA700">
                  12.00
                </Heading>
                <ListItemText
                  primary="Breakfast + coffee
"
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.
"
                />
              </Flex>
            </ListItem>
            <ListItem button>
              <Flex align="flex-start">
                <Heading is="h4" f={[2, 3]} pt={1} color="sA700">
                  14.00
                </Heading>
                <ListItemText
                  primary="Breakfast + coffee
"
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.
"
                />
              </Flex>
            </ListItem>
          </Collapse>
        </List>
      </PrettyPaper>
    )
  }
}

export default withTheme(Agenda)
