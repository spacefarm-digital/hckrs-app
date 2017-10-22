import React from 'react'
import PrettyPaper from './extended/PrettyPaper'
import TimeSlot from './TimeSlot'
import TimeSlotButton from './TimeSlotButton'

import Grid from 'material-ui/Grid'

import { Heading, Measure, Text, Box } from 'rebass'

// This page assumes the advisor has marked all available slots as available. A regular page of this kind would probaby featuere less options

const TimeSlotDay = props => (
  <PrettyPaper p={3} mb={3}>
    <Heading f={3} mb={2}>
      {props.day}
    </Heading>
    <Measure>
      {props =>
        props.book ? (
          <Text mb={3}>
            Mark the time slots when you are going to be available
          </Text>
        ) : null}
    </Measure>
    <Box mb={3}>
      <Grid container>
        {props.data.map((timeSlot, value) => (
          <Grid item xs={12} sm={4} md={3} lg={2}>
            {props.book ? (
              <TimeSlotButton
                children={timeSlot}
                id={`${timeSlot}-${props.day}`}
              />
            ) : (
              <TimeSlot time={timeSlot} id={`${timeSlot}-${props.day}`} />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  </PrettyPaper>
)

export default TimeSlotDay
