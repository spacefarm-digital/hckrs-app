/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Container, Flex, Box, Text, Heading } from 'rebass'

import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'

import Search from '../components/Search'
import Filter from '../components/Filter'
import ChallengePreview from '../components/ChallengePreview'

class Challenges extends Component {
  render() {
    return (
      <div>
        {/* <Filter /> */}
        {/* Main */}
        <Container is="main">
          {/* <Grid container>
            {[0, 1, 2].map(value => (
              <Grid xs={12} sm={6} lg={4} xl={3} key={value} item>
                <ChallengePreview />
              </Grid>
            ))}
          </Grid> */}
        </Container>
      </div>
    )
  }
}
export default Challenges
