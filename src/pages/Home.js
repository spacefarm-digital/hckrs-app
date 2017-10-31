import React from 'react'

import WhileYouWereAway from '../components/WhileYouWereAway'
import SuggestedChallenges from '../components/SuggestedChallenges'
import FeaturedNews from '../components/FeaturedNews'
import FluidContainer from '../components/extended/FluidContainer'

const Home = props => (
  <div>
    <FluidContainer is="main">
      <WhileYouWereAway />
      <SuggestedChallenges />
      <FeaturedNews />
    </FluidContainer>
  </div>
)

export default Home
