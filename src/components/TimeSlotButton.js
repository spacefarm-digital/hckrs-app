import React, { Component } from 'react'
import styled from 'styled-components'

import Button from 'material-ui/Button'

const TimeSlotButton = styled(Button).attrs({
  raised: true,
})`width: 100%;
  padding: 1rem!important;
  display: block;
  width: 100%;
  background-color: ${props => props.theme.colors.g200};
  font-size: ${props => props.theme.fontSizes[2]}px!important;`

export default TimeSlotButton
