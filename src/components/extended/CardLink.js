import React from 'react'
import styled from 'styled-components'
import Button from 'material-ui/Button'
import { space, width, fontSize, color } from 'styled-system'

const CardLink = styled(Button)`
  ${space} ${width} ${fontSize} ${color} display: block !important;
  color: inherit !important;
  text-align: left;
  margin: 0 !important;
  background-color: white !important;
  padding: 1rem !important;
`

export default CardLink
