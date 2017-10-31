import React from 'react'

import PrettyPaper from './extended/PrettyPaper'

import { Heading, Box, Text } from 'rebass'

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
