import React from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'

import PrettyPaper from './extended/PrettyPaper'

import { Heading, Box } from 'rebass'

import Grid from 'material-ui/Grid'

import Subchallenge from './Subchallenge'

const Subchallenges = props => (
  <ScrollableAnchor id="challenge-subchallenges">
    <Box mb={4}>
      <Heading is="h2" f={3} mb={2} color="pA400">
        Sub-challenges
      </Heading>
      <Grid container>
        {[0, 1, 2].map(category => (
          <Grid item xs={12} sm={6}>
            <Subchallenge />
          </Grid>
        ))}
      </Grid>
    </Box>
  </ScrollableAnchor>
)

export default Subchallenges
