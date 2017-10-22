import styled from 'styled-components'
import Input from 'material-ui/TextField'
import { space, width, fontSize, color } from 'styled-system'

const NameField = styled(Input)`
  ${space} ${width} ${fontSize} ${color} font-weight: 500;
  div {
    display: block !important;
  }
  input {
    text-align: ${props => (props.center ? 'center' : 'left')}!important;
  }
`

export default NameField
