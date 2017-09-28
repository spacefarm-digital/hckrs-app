/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react'

import { Container, Box } from 'rebass'

import ProfilePreview from '../components/ProfilePreview'
import ChallengePreview from '../components/ChallengePreview'
import PageTitle from '../components/PageTitle'
import ChallengeUpdate from '../components/ChallengeUpdate'
import WhileYouWereAway from '../components/WhileYouWereAway'

import HomeIcon from 'material-ui-icons/Home'

const Home = props => (
  <div>
    <PageTitle title="Home">
      <HomeIcon />
    </PageTitle>
    <Container is="main">
      <WhileYouWereAway />
    </Container>
  </div>
)

export default Home
