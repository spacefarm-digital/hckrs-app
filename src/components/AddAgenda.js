import React from 'react'

import { Heading, Box } from 'rebass'

import EmptyAgendaDay from '../components/EmptyAgendaDay'

const Agenda = props => (
  <Box mb={4}>
    <Heading is="h2" f={3} mb={3} color="pA400">
      3. Add agenda
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
