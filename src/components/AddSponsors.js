import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Box, Heading } from 'rebass'

import EmptySponsor from './EmptySponsor'

import Grid from 'material-ui/Grid'

import NewBlock from '../components/NewBlock'

const AddSponsors = props => (
  <ScrollableAnchor id="challenge-sponsors">
    <Box mb={4}>
      <Heading is="h2" f={3} mb={3} color="pA400">
        6. Add sponsors
      </Heading>
      <Grid container align="stretch">
        <Grid item xs={6} sm={4} lg={3} xl={2}>
          <EmptySponsor />
        </Grid>
        <Grid item xs={6} sm={4} lg={3} xl={2}>
          <NewBlock tall>Add another sponsor</NewBlock>
        </Grid>
      </Grid>
    </Box>
  </ScrollableAnchor>
)
export default AddSponsors
