import styled from 'styled-components'

import { Absolute } from 'rebass'

const Fade = styled(Absolute)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(24, 30, 38, 0) 60%,
    rgba(24, 30, 38, 0.85)
  );
`

export default Fade
