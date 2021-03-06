import styled from 'styled-components'
import Icon from 'material-ui/Icon'

const TypeIcon = styled(Icon)`
  display: inline-block;
  width: 1em !important;
  height: 1em !important;
  margin-right: ${props => (props.margin ? props.margin : '.2em')};
  vertical-align: -13%;
  color: ${props =>
    props.primary ? props.theme.colors.pA400 : 'currentColor'};
  svg {
    width: 100% !important;
    height: 100% !important;
  }
`

export default TypeIcon
