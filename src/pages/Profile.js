/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Container, Box } from 'rebass'

import Dialog from 'material-ui/Dialog'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

import ProfileStats from '../components/ProfileStats'

class Profile extends Component {
  render() {
    return (
      <Container pt={2} is="main">
        <Box mb={3}>
          <Grid container>
            <Grid item xs={12} md={5} lg={4}>
              <ProfileStats />
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <Box pt={2}>
                <Paper>Hello</Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    )
  }
}
export default Profile
