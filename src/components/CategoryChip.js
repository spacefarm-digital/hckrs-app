import styled from 'styled-components'
import Button from 'material-ui/Button'

import { darken, saturate } from 'polished'

const CategoryChip = styled(Button)`
  background-color: ${props => (props.color ? props.color : 'pink')}!important;
  color: ${props =>
    props.color
      ? saturate(2.5, darken(0.6, props.color))
      : saturate(2.5, darken(0.6, 'pink'))}!important;
  font-weight: 500 !important;
  font-size: 14px !important;
  line-height: 1 !important;
  display: block !important;
  padding: 9px 16px !important;
  border-radius: 24px !important;
  min-height: 0 !important;
  line-height: 1;
  overflow: hidden !important;
`

export default CategoryChip
