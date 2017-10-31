import React, { Component } from 'react'

import FluidContainer from '../components/extended/FluidContainer'
import TimeSlotDay from '../components/TimeSlotDay'
import Advisor from '../components/Advisor'

import { Box } from 'rebass'

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
