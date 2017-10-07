/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Box, Heading } from 'rebass'

import Dialog from 'material-ui/Dialog'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

import ChallengePreview from '../components/ChallengePreview'
import HackPreview from '../components/HackPreview'
import ProfileStats from '../components/ProfileStats'
import FluidContainer from '../components/extended/FluidContainer'

class Profile extends Component {
  render() {
    return (
      <FluidContainer pt={3} is="main">
        <Box mb={3}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={4} lg={4} xl={3}>
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
                ]}
              />,
            </Grid>
            <Grid item xs={12} md={8} lg={8} xl={9}>
              <Box mb={4}>
                <Heading f={3} is="h2" mb={3}>
                  Hacker's Challenges
                </Heading>
                {/* Challenges */}
                <Grid container>
                  {[0, 1, 2].map(value => (
                    <Grid item xs={12} sm={6} xl={4}>
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
                    <Grid item xs={12} sm={6} xl={4}>
                      <HackPreview />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </FluidContainer>
    )
  }
}
export default Profile
