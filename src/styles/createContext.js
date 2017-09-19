// @flow

import { create } from 'jss'
import preset from 'jss-preset-default'
import { SheetsRegistry } from 'react-jss/lib/jss'
import { createMuiTheme } from 'material-ui/styles'
import { orange, green } from 'material-ui/colors'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: green,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    display4: {
      fontSize: 96,
      fontWeight: 600,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      letterSpacing: '-.04em',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.54)',
    },
    display3: {
      fontSize: 72,
      fontWeight: 600,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      letterSpacing: '-.02em',
      lineHeight: '112px',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    display2: {
      fontSize: 64,
      fontWeight: 600,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '72px',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    display1: {
      fontSize: 48,
      fontWeight: 600,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '56px',
      color: 'rgba(0, 0, 0, 0.54)',
    },
    headline: {
      fontSize: 32,
      fontWeight: 600,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '40px',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    title: {
      fontSize: 24,
      fontWeight: 600,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '32px',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    subheading: {
      fontSize: 20,
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    body2: {
      fontSize: 14,
      fontWeight: 600,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    caption: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.54)',
    },
    button: {
      fontSize: 16,
      fontWeight: 500,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
})

// Configure JSS
const jss = create(preset())
jss.options.createGenerateClassName = createGenerateClassName

export const sheetsManager: Map<*, *> = new Map()

export default function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager,
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  }
}
