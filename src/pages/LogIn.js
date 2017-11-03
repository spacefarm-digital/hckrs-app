import React, { Component } from 'react'

import LogInForm from '../components/LogInForm'
import PrettyPaper from '../components/extended/PrettyPaper'

import FluidContainer from '../components/extended/FluidContainer'

import AddIcon from 'material-ui-icons/Add'

class LogIn extends Component {
  render() {
    return (
      <main>
        <FluidContainer pt={4} style={{ maxWidth: 600 }}>
          <PrettyPaper p={3} pt={4}>
            <LogInForm />
          </PrettyPaper>
        </FluidContainer>
      </main>
    )
  }
}
export default LogIn
