import React from 'react'
import PropTypes from 'prop-types'
import { ListItemIcon } from 'material-ui/List'
import PrettyPaper from './extended/PrettyPaper'
import DateRangeIcon from 'material-ui-icons/DateRange'

import EmptyAgendaItem from './EmptyAgendaItem'

import { Flex, Heading, Box } from 'rebass'

import NewBlock from './NewBlock'

const propTypes = {
  date: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  items: PropTypes.array,
}

const defaultProps = {
  date: 'January 1st',
  open: false,
}

class EmptyAgendaDay extends React.Component {
  render() {
    return (
      <PrettyPaper mb={3} component="li">
        <Flex w={1} align="center" mb={3} p={3}>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <Heading is="h3" f={2}>
            {this.props.date}
          </Heading>
        </Flex>
        <Box is="ul" px={3}>
          <Box is="li" mb={3}>
            {/* Empty agenda item */}
            <EmptyAgendaItem />
          </Box>
        </Box>
        <NewBlock>Add agenda item</NewBlock>
      </PrettyPaper>
    )
  }
}

EmptyAgendaDay.PropTypes = propTypes
EmptyAgendaDay.defaultProps = defaultProps

export default EmptyAgendaDay
