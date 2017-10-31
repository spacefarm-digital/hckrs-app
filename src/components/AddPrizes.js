import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Heading, Box } from 'rebass'

import Grid from 'material-ui/Grid'

import NewBlock from './NewBlock'
import EmptyPrize from './EmptyPrize'

const AddPrizes = props => (
  <ScrollableAnchor id="challenge-prizes">
    <Box mb={4}>
      <Heading is="h2" f={3} mb={2} color="pA400">
        5. Add prizes
      </Heading>
      <Grid container>
        <Grid item xs={12} sm={6} xl={4}>
          <EmptyPrize />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <NewBlock tall>Add another prize</NewBlock>
        </Grid>
      </Grid>
    </Box>
  </ScrollableAnchor>
)
export default AddPrizes
