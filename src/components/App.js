/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'
import withRoot from '../components/withRoot'

import Main from '../components/Main'
import TitleBar from '../components/TitleBar'

class App extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <Main />
      </div>
    )
  }
}
export default withRoot(App)
