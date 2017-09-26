import React from 'react'
import styled from 'styled-components'

const Emoji = styled.span.attrs({
  role: 'image',
  'aria-label': props => props.accessibleName,
})`
  display: inline-block;
  margin-right: 0.3em;
  font-size: 1em;
`

export default Emoji
