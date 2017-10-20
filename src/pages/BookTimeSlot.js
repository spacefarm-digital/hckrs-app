import React, { Component } from 'react'

import FluidContainer from '../components/extended/FluidContainer'
import PrettyPaper from '../components/extended/PrettyPaper'
import TimeSlot from '../components/TimeSlot'
import TimeSlotDay from '../components/TimeSlotDay'
import Advisor from '../components/Advisor'

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

import { Flex, Box, Heading, Text, Measure } from 'rebass'

import timeSlotData from '../data/timeSlotData'

class BookTimeSlot extends Component {
  render() {
    return (
      <FluidContainer pt={4}>
        <Box style={{ maxWidth: 500 }} mb={3}>
          <Advisor />
        </Box>
        <TimeSlotDay day="Monday" data={timeSlotData} book />
        <TimeSlotDay day="Tuesday" data={timeSlotData} book />
      </FluidContainer>
    )
  }
}
export default BookTimeSlot
