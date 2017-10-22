import React from 'react'

import FancyHackersPreview from './FancyHackersPreview'
import FluidContainer from './extended/FluidContainer'

import { Box, Heading, Measure } from 'rebass'

const MFeaturedHackers = props => (
  <Box pt={4}>
    <FluidContainer>
      <Heading f={3} is="h2" color="s800">
        Featured hackers
      </Heading>
    </FluidContainer>
    <FancyHackersPreview />
    <Measure mx="auto">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, labore
      suscipit. Dolores, sapiente delectus recusandae sit deleniti repellat
      neque veritatis, distinctio unde rem quasi soluta in non eius nobis
      cumque?
    </Measure>
  </Box>
)

export default MFeaturedHackers
