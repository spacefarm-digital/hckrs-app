import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { space, width, fontSize, color } from 'styled-system'

const CleanLink = styled(Link)`
  display: block;
  min-width: 0 !important;
`

export default CleanLink
