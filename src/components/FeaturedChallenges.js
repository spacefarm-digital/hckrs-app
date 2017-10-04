import React from 'react'
import PropTypes from 'prop-types'

import Grid from 'material-ui/Grid'

import { Box } from 'rebass'

import FeaturedChallenge from '../components/FeaturedChallenge'

const propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.object),
}

const FeaturedChallenges = props => (
  <Box mb={4} px={3}>
    <Grid container>
      <Grid item xs={12}>
        <FeaturedChallenge
          big
          title={props.challenges[0].title}
          image={props.challenges[0].image}
          logo={props.challenges[0].logo}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FeaturedChallenge
          title={props.challenges[1].title}
          image={props.challenges[1].image}
          logo={props.challenges[1].logo}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FeaturedChallenge
          title={props.challenges[2].title}
          image={props.challenges[2].image}
          logo={props.challenges[2].logo}
        />
      </Grid>
    </Grid>
  </Box>
)

FeaturedChallenges.PropTypes = propTypes

export default FeaturedChallenges
