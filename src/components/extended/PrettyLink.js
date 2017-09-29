import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PrettyLink = styled(Link)`
  min-width: 0 !important;
  text-decoration: none;
  font-weight: 500;
  // Fix this
  color: #ff4722;
`

export default PrettyLink
