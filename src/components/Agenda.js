import React from 'react'
import List from 'material-ui/List'
import ScrollableAnchor from 'react-scrollable-anchor'
import PrettyPaper from './extended/PrettyPaper'

import { Heading, Box } from 'rebass'

import AgendaDay from '../components/AgendaDay'

const Agenda = props => (
  <ScrollableAnchor id="challenge-agenda">
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
        {props.data.map((agendaDay, value) => (
          <AgendaDay
            date={agendaDay.date}
            items={agendaDay.items}
            open={agendaDay.open}
            key={agendaDay.value}
          />
        ))}
      </List>
    </PrettyPaper>
  </ScrollableAnchor>
)
export default Agenda
