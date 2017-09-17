/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'
import withRoot from '../components/withRoot'

import ChallengePreview from '../components/ChallengePreview'

import { Container } from 'rebass'

class Index extends Component {
  render() {
    return (
      <Container pt={4}>
        <ChallengePreview title="Lizard" description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" />
      </Container>
    )
  }
}
export default withRoot(Index)
