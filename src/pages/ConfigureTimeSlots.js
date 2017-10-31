import React, { Component } from 'react'

import FluidContainer from '../components/extended/FluidContainer'
import TimeSlotDay from '../components/TimeSlotDay'

import timeSlotData from '../data/timeSlotData'

class ConfigureTimeSlots extends Component {
  render() {
    return (
      <FluidContainer pt={4}>
        <TimeSlotDay day="Monday" data={timeSlotData} />
        <TimeSlotDay day="Tuesday" data={timeSlotData} />
      </FluidContainer>
    )
  }
}
export default ConfigureTimeSlots
