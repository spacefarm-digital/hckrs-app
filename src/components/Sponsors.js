import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Box, Heading } from 'rebass'

import Sponsor from './Sponsor'

import Grid from 'material-ui/Grid'

const Sponsors = props => (
  <ScrollableAnchor id="challenge-sponsors">
    <Box mb={4}>
      <Heading is="h2" f={3} mb={3} color="pA400">
        Sponsors
      </Heading>
      <Grid container align="stretch">
        {props.sponsors.map((sponsor, index) => (
          <Grid item xs={6} sm={4}>
            <Sponsor
              name={sponsor.name}
              externalUrl={sponsor.externalUrl}
              image={sponsor.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </ScrollableAnchor>
)
export default Sponsors
