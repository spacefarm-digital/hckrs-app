import React from 'react'
import PropTypes from 'prop-types'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import PrettyPaper from './extended/PrettyPaper'
import Collapse from 'material-ui/transitions/Collapse'
import DateRangeIcon from 'material-ui-icons/DateRange'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'

import { Flex, Heading, Box } from 'rebass'

import PrettyLink from '../components/extended/PrettyLink'
import AgendaDay from '../components/AgendaDay'

const Agenda = props => (
  <PrettyPaper mb={4}>
    <List
      subheader={
        <Box bg="p50" color="pA400">
          <Heading is="h2" f={3} p={3}>
            Agenda
          </Heading>
        </Box>
      }
    >
      {props.agenda.map((agendaDay, value) => (
        <AgendaDay
          date={agendaDay.date}
          items={agendaDay.items}
          open={agendaDay.open}
          key={agendaDay.value}
        />
      ))}
    </List>
  </PrettyPaper>
)
export default Agenda
