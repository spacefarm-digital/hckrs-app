/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Container, Box, Heading } from 'rebass'

class Hackers extends Component {
  render() {
    return (
      <Container pt={4} is="main">
        <Box mb={3}>
          <Heading f={5} is="h1">
            Hackers page
          </Heading>
        </Box>
      </Container>
    )
  }
}
export default Hackers
