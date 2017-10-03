import React from 'react'

import Grid from 'material-ui/Grid'

import { Box } from 'rebass'

import FeaturedChallenge from '../components/FeaturedChallenge'

const FeaturedChallenges = props => (
  <Box mb={4} px={3}>
    <Grid container>
      <Grid item xs={12}>
        <FeaturedChallenge big />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FeaturedChallenge />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FeaturedChallenge />
      </Grid>
    </Grid>
  </Box>
)

export default FeaturedChallenges
