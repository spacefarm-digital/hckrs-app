import React from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import DateRangeIcon from 'material-ui-icons/DateRange'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'

import { Flex, Heading, Box } from 'rebass'

import PrettyLink from '../components/extended/PrettyLink'
import EmptyAgendaDay from '../components/EmptyAgendaDay'

const Agenda = props => (
  <Box mb={4}>
    <Heading is="h2" f={3} mb={3} color="pA400">
      3. Add Agenda
    </Heading>
    <ul>
      {props.data.map((agendaDay, value) => (
        <EmptyAgendaDay
          date={agendaDay.date}
          items={agendaDay.items}
          open={true}
          key={agendaDay.value}
        />
      ))}
    </ul>
  </Box>
)
export default Agenda
