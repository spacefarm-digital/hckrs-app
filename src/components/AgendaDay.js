import React from 'react'
import PropTypes from 'prop-types'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import PrettyPaper from './extended/PrettyPaper'
import Collapse from 'material-ui/transitions/Collapse'
import DateRangeIcon from 'material-ui-icons/DateRange'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'

import AgendaItem from './AgendaItem'

import { Flex, Heading, Box } from 'rebass'

const propTypes = {
  date: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  items: PropTypes.array,
}

const defaultProps = {
  date: 'January 1st',
  open: false,
}

class AgendaDay extends React.Component {
  state = { open: this.props.open }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <Flex justify="space-between" w={1}>
            <Heading is="h3" f={2}>
              {this.props.date}
            </Heading>
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </Flex>
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          {this.props.items.map((agendaItem, value) => (
            <AgendaItem
              title={agendaItem.title}
              startTime={agendaItem.startTime}
              description={agendaItem.description}
              key={value}
            />
          ))}
        </Collapse>
      </div>
    )
  }
}

AgendaDay.PropTypes = propTypes
AgendaDay.defaultProps = defaultProps

export default AgendaDay
