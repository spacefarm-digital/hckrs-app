import styled from 'styled-components'

const PrettyBadge = styled.div`
position: relative;
  &:after {
    content: '';
    width: 12px;
    height: 12px;
    background-color: ${props => props.theme.colors.sA400};
    display: block;
    position: absolute;
    top: 0;
    right -2px;
    border-radius: 500px;
  }
`

export default PrettyBadge
