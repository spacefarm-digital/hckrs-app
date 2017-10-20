import React, { Component } from 'react'

import FluidContainer from '../components/extended/FluidContainer'
import PrettyPaper from '../components/extended/PrettyPaper'
import TimeSlot from '../components/TimeSlot'
import TimeSlotDay from '../components/TimeSlotDay'

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

import { Flex, Box, Heading, Text, Measure } from 'rebass'

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
