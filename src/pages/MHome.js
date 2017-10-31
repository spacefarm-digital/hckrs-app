import React from 'react'

import FeaturedNews from '../components/FeaturedNews'
import FluidContainer from '../components/extended/FluidContainer'

import MHero from '../components/MHero'
import MFeaturedBenefits from '../components/MFeaturedBenefits'
import MFeaturedChallenges from '../components/MFeaturedChallenges'
import MFeaturedHackers from '../components/MFeaturedHackers'

const MHome = props => (
  <div>
    {/* Hero */}
    <MHero />
    {/* How Hckrs can help you */}
    <MFeaturedBenefits />
    {/* Fieatued challenges */}
    <MFeaturedChallenges />
    {/* Fieatued hackers */}
    <MFeaturedHackers />
    {/* Fieatued news */}
    <FluidContainer>
      <FeaturedNews />
    </FluidContainer>
  </div>
)

export default MHome
