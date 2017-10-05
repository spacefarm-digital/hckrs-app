import React from 'react'
import PropTypes from 'prop-types'

import PrettyPaper from './extended/PrettyPaper'

import { Heading, Box, BackgroundImage, Text } from 'rebass'

import placeholder from '../assets/placeholder.jpg'

const Description = props => (
  <Box mb={4}>
    <PrettyPaper p={3}>
      <Heading is="h2" f={3} mb={2} color="pA400">
        The story
      </Heading>
      <Box>
        <Text mb={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
          reiciendis? Asperiores, quibusdam porro? Cupiditate tempore, et illo
          sequi a inventore voluptatem numquam aspernatur eligendi natus nobis
          maxime ea magnam pariatur?
        </Text>
        <BackgroundImage src={placeholder} ratio={1 / 2} mb={3} />
      </Box>
    </PrettyPaper>
  </Box>
)

export default Description
