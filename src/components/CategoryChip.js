import styled from 'styled-components'
import CleanLink from '../components/extended/CleanLink'

import { darken, saturate } from 'polished'

const CategoryChip = styled(CleanLink)`
  background-color: ${props => props.color};
  color: ${props => saturate(1, darken(0.5, props.color))};
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  display: block;
  padding: 8px 12px;
  border-radius: 24px;
`

export default CategoryChip
