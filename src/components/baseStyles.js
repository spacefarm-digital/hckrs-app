import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset}
  * {
      box-sizing: border-box;
  }
`

export default baseStyles
