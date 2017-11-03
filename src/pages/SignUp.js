import React, { Component } from 'react'

import SignUpForm from '../components/SignUpForm'
import PrettyPaper from '../components/extended/PrettyPaper'

import { Box } from 'rebass'

import FluidContainer from '../components/extended/FluidContainer'

import AddIcon from 'material-ui-icons/Add'

class SignUp extends Component {
  render() {
    return (
      <main>
        <FluidContainer pt={4} style={{ maxWidth: 600 }}>
          <PrettyPaper p={3} pt={4}>
            <SignUpForm />
          </PrettyPaper>
        </FluidContainer>
      </main>
    )
  }
}
export default SignUp
