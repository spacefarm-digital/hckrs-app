/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Container, Box } from 'rebass'

import ProfilePreview from '../components/ProfilePreview'
import ChallengePreview from '../components/ChallengePreview'

class Home extends Component {
  render() {
    return (
      <Container pt={3} is="main">
        <Box mb={3}>
          <ProfilePreview />
        </Box>
        <ChallengePreview />
      </Container>
    )
  }
}
export default Home
