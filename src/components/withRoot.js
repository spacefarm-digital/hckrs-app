/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'
import baseStyles from './baseStyles'
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
      lineHeight: 1.5,
    },
    ul: {
      listStyle: 'none',
    },
  },
})

// Rebass values
const rebassTheme = {
  breakpoints: [32, 48, 64, 80],
  space: [0, 4, 8, 16, 32, 64, 128],
  font: 'Roboto, Helvetica, sans-serif',
  fontSizes: [12, 16, 24, 36, 48, 72],
  weights: [400, 500],
  colors: {
    black: '#000',
    white: '#fff',
    // Primary
    p50: '#FBEAE7',
    p100: '#FFC7BC',
    p200: '#FFA391',
    p300: '#FF7F65',
    p400: '#FF6243',
    p500: '#FF4722',
    p600: '#F4421E',
    p700: '#D63717',
    p800: '#C93214',
    p900: '#BF2A0C',
    pA100: '#FFB5A6',
    pA200: '#FF8C76',
    pA400: '#FF350D',
    pA700: '#E52600',
    blue: '#FF4722',
    // Secondary
    s50: '#E3FDF2',
    s100: '#BCF5DD',
    s200: '#8EEDC6',
    s300: '#6DE8B5',
    s400: '#43E8A3',
    s500: '#25E595',
    s600: '#21D98C',
    s700: '#1BC47E',
    s800: '#17B272',
    s900: '#0E8754',
    sA100: '#B9F6DD',
    sA200: '#76FFC7',
    sA400: '#00E686',
    sA700: '#00C875',
    // Grays
    g50: '#F7F8FA',
    g100: '#EDF0F5',
    g200: '#DDE3ED',
    g300: '#CAD2E0',
    g400: '#9DA9BD',
    g500: '#69768C',
    g600: '#525F75',
    g700: '#444F61',
    g800: '#333E50',
    g900: '#181E26',
  },
  radius: '2px',
  monospace: '"SF Mono", "Roboto Mono", Menlo, monospace',
}

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
      baseStyles()
      return (
        <Provider theme={rebassTheme}>
          {/* Rebass theme */}
          <MuiThemeProvider
            theme={context.themeMui}
            sheetsManager={context.sheetsManager}
          >
            <AppWrapper>
              <BaseComponent />
            </AppWrapper>
          </MuiThemeProvider>
        </Provider>
      )
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = wrapDisplayName(BaseComponent, 'withRoot')
  }

  return WithRoot
}

export default withRoot
