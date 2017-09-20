import styled from 'styled-components'
import Button from 'material-ui/Button'

import { darken, saturate } from 'polished'

const CategoryChip = styled(Button)`
  background-color: ${props => props.color}!important;
  color: ${props => saturate(1, darken(0.5, props.color))}!important;
  font-weight: 500 !important;
  font-size: 14px !important;
  line-height: 1 !important;
  display: block !important;
  padding: 8px 12px !important;
  border-radius: 24px !important;
`

export default CategoryChip
