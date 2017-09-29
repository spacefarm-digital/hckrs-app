import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PrettyLink = styled(Link)`
  min-width: 0 !important;
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.theme.colors.pA400};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  &:hover {
    color: ${props => props.theme.colors.pA700};
    background-color: ${props => props.theme.colors.p50};
  }
`

export default PrettyLink
