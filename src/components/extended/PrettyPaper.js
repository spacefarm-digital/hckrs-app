import React from 'react'
import styled from 'styled-components'
import Paper from 'material-ui/Paper'
import { space, width, fontSize, color } from 'styled-system'

const PrettyPaper = styled(Paper)`
  ${space} ${width} ${fontSize} ${color};
  height: 100%;
  height: ${props => (props.equalHeight ? '100%' : 'auto')};
`

export default PrettyPaper
