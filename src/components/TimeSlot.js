import React from 'react'
import Ink from 'react-ink'

import styled from 'styled-components'

import HiddenInput from './extended/HiddenInput'

import { Relative } from 'rebass'

const handleChange = () => {
  this.state.checked
    ? this.setState({
        checked: false,
      })
    : this.setState({ checked: true })
}

const TimeSlotLabel = styled.label`
  border-radius: 2px;
  transition: all 250ms ease-out;
  text-align: center;
  font-weight: 500;
  padding: 1rem;
  display: block;
  width: 100%;
  background-color: ${props => props.theme.colors.g200};
  position: relative;
  font-size: ${props => props.theme.fontSizes[2]}px;
  cursor: pointer;
`

const TimeSlotInput = styled(HiddenInput)`
  &:checked + label {
    background-color: ${props => props.theme.colors.s100};
  }
  &:focus + label {
    transform: scale(1.05);
  }
`

class TimeSlot extends React.Component {
  render() {
    return (
      <Relative>
        <TimeSlotInput
          type="checkbox"
          id={this.props.id}
          onChange={this.handleChange}
          checked={this.onChange}
          ref={this.props.time}
        />
        <TimeSlotLabel htmlFor={this.props.id}>
          {this.props.time}
          <Ink />
        </TimeSlotLabel>
      </Relative>
    )
  }
}
export default TimeSlot
