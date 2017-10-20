import React from 'react'
import styled from 'styled-components'

const PrettyBadge = styled.div`
position: relative;
  &:after {
    content: '';
    width: 16px;
    height: 16px;
    background-color: ${props => props.theme.colors.sA400};
    display: block;
    position: absolute;
    top: -4px;
    right -4px;
    border-radius: 500px;
  }
`

export default PrettyBadge
