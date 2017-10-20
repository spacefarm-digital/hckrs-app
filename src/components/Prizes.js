import React from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'
import PrettyPaper from './extended/PrettyPaper'

import { Flex, Heading, Box } from 'rebass'

import MoneyPrize from './MoneyPrize'

import Grid from 'material-ui/Grid'

const Prizes = props => (
  <ScrollableAnchor id="challenge-prizes">
    <Box mb={4}>
      <Heading is="h2" f={3} mb={2} color="pA400">
        Prizes
      </Heading>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <MoneyPrize
            ammount="$50 000"
            name="1st prize"
            description="This is a sample description."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MoneyPrize
            ammount="$2500"
            name="2nd prize"
            description="This is a sample description"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MoneyPrize
            ammount="$100"
            name="3rd prize"
            description="This is a sample description"
          />
        </Grid>
      </Grid>
    </Box>
  </ScrollableAnchor>
)
export default Prizes
