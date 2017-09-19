/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import wrapDisplayName from 'recompose/wrapDisplayName'
import createContext from '../styles/createContext'

import { Provider } from 'rebass'

// Apply some reset
const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
    },
  },
})

let AppWrapper = props => props.children

AppWrapper = withStyles(styles)(AppWrapper)

const context = createContext()

function withRoot(BaseComponent) {
  class WithRoot extends Component {
    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return (
        <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
          <Provider
            theme={{
              font: 'Roboto, Helvetica, sans-serif',
              fontSizes: [12, 16, 24, 36, 48, 72],
            }}
          >
            <MuiThemeProvider
              theme={context.theme}
              sheetsManager={context.sheetsManager}
            >
              <AppWrapper>
                <BaseComponent />
              </AppWrapper>
            </MuiThemeProvider>
          </Provider>
        </JssProvider>
      )
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = wrapDisplayName(BaseComponent, 'withRoot')
  }

  return WithRoot
}

export default withRoot
