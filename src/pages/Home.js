import React, { Component } from 'react'

import { Box } from 'rebass'

import ProfilePreview from '../components/ProfilePreview'
import ChallengePreview from '../components/ChallengePreview'
import PageTitle from '../components/PageTitle'
import WhileYouWereAway from '../components/WhileYouWereAway'
import SuggestedChallenges from '../components/SuggestedChallenges'
import FeaturedNews from '../components/FeaturedNews'
import FluidContainer from '../components/extended/FluidContainer'

import HomeIcon from 'material-ui-icons/Home'

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
