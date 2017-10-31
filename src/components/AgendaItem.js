import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText } from 'material-ui/List'

import { Flex, Heading } from 'rebass'

const propTypes = {
  startTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

const defaultProps = {
  startTime: '10.00',
  title: 'Breakfast + coffee',
}

const AgendaItem = props => (
  <ListItem button>
    <Flex align={props.description ? 'flex-start' : 'center'}>
      <Heading is="h4" f={[2, 3]} pt={1} color="pA400">
        {props.startTime}
      </Heading>
      <ListItemText primary={props.title} secondary={props.description} />
    </Flex>
  </ListItem>
)

AgendaItem.PropTypes = propTypes
AgendaItem.defaultProps = defaultProps

export default AgendaItem
