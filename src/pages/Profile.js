/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Container, Box, Heading } from 'rebass'

import Dialog from 'material-ui/Dialog'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

import ChallengePreview from '../components/ChallengePreview'
import HackPreview from '../components/HackPreview'
import ProfileStats from '../components/ProfileStats'

class Profile extends Component {
  render() {
    return (
      <Container pt={3} is="main">
        <Box mb={3}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={4} lg={4}>
              <ProfileStats
                name="Hacker McHacker"
                bio="Bio text. This will be a little bit longer, closer to a Twitter bio"
                categories={[
                  'Aerospace',
                  'Agriculture',
                  'Chemical',
                  'Computer',
                  'Construction',
                  'Food & Drinks',
                  c,
                ]}
              />,
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <Box mb={4}>
                <Heading f={3} is="h2" mb={3}>
                  Hacker's Challenges
                </Heading>
                {/* Challenges */}
                <Grid container>
                  {[0, 1, 2].map(value => (
                    <Grid item xs={12} sm={6}>
                      <ChallengePreview />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box mb={4}>
                <Heading f={3} is="h2" mb={3}>
                  Hacker's hacks
                </Heading>
                {/* Hacks */}
                <Grid container>
                  {[0, 1, 2].map(value => (
                    <Grid item xs={12} sm={6}>
                      <HackPreview />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    )
  }
}
export default Profile
