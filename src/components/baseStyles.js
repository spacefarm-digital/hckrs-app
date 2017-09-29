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
`

export default baseStyles
