import styled from 'styled-components'
import BlockAvatar from './BlockAvatar'

const ShadowAvatar = styled(BlockAvatar)`
  box-shadow: ${props => props.theme.shadows[1]};
  border: 4px solid white;
  background: white;
`

export default ShadowAvatar
