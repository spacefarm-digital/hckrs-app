import styled from 'styled-components'
import { Tab } from 'material-ui/Tabs'

const DesktopTab = styled(Tab)`
  flex-direction: row !important;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  align-items: center !important;
  div {
    padding-right: 0 !important;
    padding-left: 0.5rem;
  }
`

export default DesktopTab
