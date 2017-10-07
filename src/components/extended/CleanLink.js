import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { space, width, fontSize, color } from 'styled-system'

const CleanLink = styled(Link)`
  ${space} ${width} ${fontSize} ${color} min-width: 0 !important;
  text-decoration: none;
  color: inherit;
  position: relative;
`

export default CleanLink
