/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Container, Box } from 'rebass'

class News extends Component {
  render() {
    return (
      <Container pt={4} is="main">
        <Box mb={3}>
          <h1>News page</h1>
        </Box>
      </Container>
    )
  }
}
export default News
