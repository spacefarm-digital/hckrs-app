import React from 'react'

import FancyHackersPreview from './FancyHackersPreview'
import FluidContainer from './extended/FluidContainer'

import { Box, Heading, Measure } from 'rebass'

const MFeaturedHackers = props => (
  <Box pt={4}>
    <FluidContainer>
      <Heading f={3} is="h2" color="s800">
        Meet the hackers
      </Heading>
    </FluidContainer>
    <FancyHackersPreview />
    <Measure mx="auto">
      We said we have the right hackers to solve all your industry's challenges. Well, we like to put our money where our mouth is.
    </Measure>
  </Box>
)

export default MFeaturedHackers
