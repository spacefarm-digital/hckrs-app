import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  accessibleName: PropTypes.string.isRequired,
}

const Emoji = styled.span.attrs({
  role: 'image',
  'aria-label': props => props.accessibleName,
})`
  display: inline-block;
  margin-right: 0.3em;
  font-size: 1em;
`

Emoji.propTypes = propTypes

export default Emoji
