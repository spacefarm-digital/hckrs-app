import React from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Box, Heading } from 'rebass'

import Advisor from './Advisor'

import Grid from 'material-ui/Grid'

const propTypes = {
  advisors: PropTypes.array.isRequired,
}

const Advisors = props => (
  <ScrollableAnchor id="challenge-advisors">
    <Box mb={4}>
      <Heading is="h2" f={3} mb={3} color="pA400">
        Advisors
      </Heading>
      <Grid container align="stretch">
        {props.data.map((advisor, index) => (
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Advisor
              name={advisor.name}
              avatar={advisor.avatar}
              categories={advisor.categories}
              bookingAllowed
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </ScrollableAnchor>
)

Advisors.PropTypes = propTypes

export default Advisors
