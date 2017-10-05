import React, { Component } from 'react'

import { Container, Box } from 'rebass'

import ProfilePreview from '../components/ProfilePreview'
import ChallengePreview from '../components/ChallengePreview'
import PageTitle from '../components/PageTitle'
import WhileYouWereAway from '../components/WhileYouWereAway'
import SuggestedChallenges from '../components/SuggestedChallenges'
import FeaturedNews from '../components/FeaturedNews'

import HomeIcon from 'material-ui-icons/Home'

const Home = props => (
  <div>
    <Container is="main">
      <WhileYouWereAway />
      <SuggestedChallenges />
      <FeaturedNews />
    </Container>
  </div>
)

export default Home
