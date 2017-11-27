import React from 'react'

import { Heading, Box } from 'rebass'

import Grid from 'material-ui/Grid'

import ChallengePreview from './ChallengePreview'

const InChallenges = props => (
  <Box mb={4}>
    <Heading is="h2" f={3} mb={3} color="pA400">
      Submitted in
    </Heading>
    <Grid container>
      <Grid item xs={12} sm={6}>
        <ChallengePreview />
      </Grid>
    </Grid>
  </Box>
)

export default InChallenges
