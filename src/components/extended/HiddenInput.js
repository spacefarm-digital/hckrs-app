import styled from 'styled-components'

const HiddenInput = styled.input`
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
`
export default HiddenInput
