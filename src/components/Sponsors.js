import React from 'react'

import { Box, Heading } from 'rebass'

import Sponsor from './Sponsor'

import Grid from 'material-ui/Grid'

const Sponsors = props => (
  <Box mb={4}>
    <Heading is="h2" f={3} mb={3} color="pA700">
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
)
export default Sponsors
