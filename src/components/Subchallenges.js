import React from 'react'
import PropTypes from 'prop-types'

import PrettyPaper from './extended/PrettyPaper'

import { Heading, Box } from 'rebass'

import Subchallenge from './Subchallenge'

const Subchallenges = props => (
  <Box mb={4}>
    <Heading is="h2" f={3} mb={2} color="pA700">
      Subchallenges
    </Heading>
    {[0, 1, 2].map(category => <Subchallenge />)}
  </Box>
)

export default Subchallenges
