import React from 'react'
import PropTypes from 'prop-types'

import PrettyPaper from './extended/PrettyPaper'

import { Heading, Box, BackgroundImage, Text } from 'rebass'

import TextField from 'material-ui/TextField'

import placeholder from '../assets/placeholder.jpg'

const AddDescription = props => (
  <Box mb={4}>
    <PrettyPaper p={3}>
      <Heading is="h2" f={3} mb={2} color="pA400">
        1. Add description
      </Heading>
      <Box>
        <Box bg="lightGrey" p={6}>
          <Text center>Rich text editor goes here</Text>
        </Box>
      </Box>
    </PrettyPaper>
  </Box>
)

export default AddDescription
