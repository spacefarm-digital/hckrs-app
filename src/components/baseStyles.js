import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset}
  * {
      box-sizing: border-box;
  }
  ::selection {
    background: #BCF5DD;
  }
  form, form div {
    vertical-align: top;
  }
  svg {
    position: relative;
    display: block;
  }
`

export default baseStyles
