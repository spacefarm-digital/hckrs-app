import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Isvg from 'react-inlinesvg'

import Grid from 'material-ui/Grid'

import PageTitle from '../components/PageTitle'
import BenefitsNav from '../components/BenefitsNav'
import FluidContainer from '../components/extended/FluidContainer'

import FeaturedChallenge from '../components/FeaturedChallenge'
import ChallengePreview from '../components/ChallengePreview'

import StarsIcon from 'material-ui-icons/Stars'

import PrettyPaper from '../components/extended/PrettyPaper'
import { Heading, Box, Text } from 'rebass'

import designersSVG from '../assets/testSVG/designers.svg'

class Benefits extends React.Component {
  render() {
    return (
      <main>
        <FluidContainer>
          <PageTitle title="Benefits">
            <StarsIcon />
          </PageTitle>
          <BenefitsNav />
          <Switch>
            <Route path="/benefits" exact component={FeaturedChallenge} />
            <Route
              path="/benefits/challengers"
              exact
              component={ChallengePreview}
            />
          </Switch>
        </FluidContainer>
      </main>
    )
  }
}

export default Benefits
