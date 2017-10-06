import styled from 'styled-components'
import { Container } from 'rebass'

const FluidContainer = styled(Container)`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => (props.tight ? '70em' : '120em')};
`

export default FluidContainer
