/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'
import withRoot from '../components/withRoot'

import ProfilePreview from '../components/ProfilePreview'
import ChallengePreview from '../components/ChallengePreview'

import { Container, Box } from 'rebass'

class Index extends Component {
  render() {
    return (
      <Container pt={4}>
        <Box mb={3}>
          <ProfilePreview />
        </Box>
        <ChallengePreview />
      </Container>
    )
  }
}
export default withRoot(Index)
