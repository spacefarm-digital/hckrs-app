import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import PrettyPaper from './extended/PrettyPaper'

import { Heading, Box, BackgroundImage, Text } from 'rebass'

import placeholder from '../assets/placeholder.jpg'

const HackDescription = props => (
  <Box mb={4}>
    <PrettyPaper p={3}>
      <Heading is="h2" f={3} mb={2} color="pA400">
        Description
      </Heading>
      <Box>
        <Text mb={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
          reiciendis? Asperiores, quibusdam porro? Cupiditate tempore, et illo
          sequi a inventore voluptatem numquam aspernatur eligendi natus nobis
          maxime ea magnam pariatur?
        </Text>
        <BackgroundImage src={placeholder} ratio={1 / 2} mb={3} />
        <Text mb={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
          reiciendis?
        </Text>
        <Box mb={3}>
          <iframe
            width="100%"
            height="320"
            src="https://www.youtube.com/embed/x6-JhKUkupY"
            frameborder="0"
            gesture="media"
            allowfullscreen
          />
        </Box>
        <Text mb={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
          reiciendis? Asperiores, quibusdam porro? Cupiditate tempore, et illo
          sequi a inventore voluptatem numquam aspernatur eligendi natus nobis
          maxime ea magnam pariatur?
        </Text>
      </Box>
    </PrettyPaper>
  </Box>
)

export default HackDescription
