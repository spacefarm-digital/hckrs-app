import React, { Component } from 'react'

import { Box } from 'rebass'
import FeaturedNews from '../components/FeaturedNews'
import FluidContainer from '../components/extended/FluidContainer'

import MHero from '../components/MHero'
import MFeaturedBenefits from '../components/MFeaturedBenefits'

const MHome = props => (
  <div>
    {/* Hero */}
    <MHero />
    {/* How can Hckrs help you */}
    <MFeaturedBenefits />
    {/* Fieatued challenges */}
    {/* Fieatued hackers */}
    {/* Fieatued news */}
    <FluidContainer>
      <FeaturedNews />
    </FluidContainer>
  </div>
)

export default MHome
