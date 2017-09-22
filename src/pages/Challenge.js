/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Container, Box, Heading } from 'rebass'

import Dialog from 'material-ui/Dialog'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

import ChallengePreview from '../components/ChallengePreview'
import HackPreview from '../components/HackPreview'
import ProfileStats from '../components/ProfileStats'
import Agenda from '../components/Agenda'

class Challenge extends Component {
  render() {
    return (
      <Container pt={3} is="main">
        <Box mb={3}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={4} lg={4}>
              <ProfileStats />
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <Box pt={2}>
                <Agenda />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    )
  }
}
export default Challenge
