/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'
import withRoot from '../components/withRoot'

import Main from '../components/Main'
import PrimaryNav from '../components/PrimaryNav'

class App extends Component {
  render() {
    return (
      <div>
        <PrimaryNav />
        <Main />
      </div>
    )
  }
}
export default withRoot(App)
