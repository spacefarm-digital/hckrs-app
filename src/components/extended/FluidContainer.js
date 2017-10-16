import styled from 'styled-components'
import { Container } from 'rebass'

const FluidContainer = styled(Container)`
  padding-left: ${props => (props.gutterless ? 0 : '1rem')};
  padding-right: ${props => (props.gutterless ? 0 : '1rem')};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => (props.tight ? '70em' : '120em')};
`

export default FluidContainer
