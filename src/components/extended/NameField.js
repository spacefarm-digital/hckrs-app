import styled from 'styled-components'
import Input from 'material-ui/TextField'
import { space, width, fontSize, color } from 'styled-system'

const NameField = styled(Input)`
  ${space} ${width} ${fontSize} ${color} font-weight: 500;
  div {
    display: block !important;
  }
`

export default NameField
