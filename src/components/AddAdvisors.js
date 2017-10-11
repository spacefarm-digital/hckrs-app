import React from 'react'
import PropTypes from 'prop-types'

import { Box, Heading } from 'rebass'

import EmptyAdvisor from './EmptyAdvisor'

import Grid from 'material-ui/Grid'

import NewBlock from './NewBlock'

const AddAdvisors = props => (
  <Box mb={4}>
    <Heading is="h2" f={3} mb={3} color="pA400">
      4.Add Advisors
    </Heading>
    <Grid container align="stretch">
      <Grid item xs={12} sm={6} lg={4} xl={3}>
        <EmptyAdvisor />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} xl={3}>
        <NewBlock tall>Add another advisor</NewBlock>
      </Grid>
    </Grid>
  </Box>
)

export default AddAdvisors
