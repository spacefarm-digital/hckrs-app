import styled from 'styled-components'
import { Tab } from 'material-ui/Tabs'

const DesktopTab = styled(Tab)`
  flex-direction: row !important;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  align-items: center !important;
  min-width: 0 !important;
  transition: all 200ms ease;
  div {
    padding-right: 0 !important;
    padding-left: 0.5rem;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.15);
    opacity: 0;
    transition: all 200ms ease;
  }
  &:hover:after {
    opacity: 1;
  }
  &:focus {
    box-shadow: 0 -4px 0 0 white inset;
  }
`

export default DesktopTab
