import React from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'

import PrettyPaper from './extended/PrettyPaper'

import { Heading, Box } from 'rebass'

import Grid from 'material-ui/Grid'

import NewSubchallenge from './NewSubchallenge'
import NewBlock from './NewBlock'

const AddSubchallenges = props => (
  <ScrollableAnchor id="challenge-subchallenges">
    <Box mb={4}>
      <Heading is="h2" f={3} mb={3} color="pA400">
        2. Add Subchallenges
      </Heading>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <NewSubchallenge />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NewBlock tall>Add another challenge</NewBlock>
        </Grid>
      </Grid>
    </Box>
  </ScrollableAnchor>
)

export default AddSubchallenges
