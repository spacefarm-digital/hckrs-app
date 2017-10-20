import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Isvg from 'react-inlinesvg'

import Grid from 'material-ui/Grid'

import PageTitle from '../components/PageTitle'
import BenefitsNav from '../components/BenefitsNav'
import FluidContainer from '../components/extended/FluidContainer'

import FeaturedChallenge from '../components/FeaturedChallenge'
import ChallengePreview from '../components/ChallengePreview'

import PlaylistAddCheckIcon from 'material-ui-icons/PlaylistAddCheck'

import PrettyPaper from '../components/extended/PrettyPaper'
import { Heading, Box, Text } from 'rebass'

import designersSVG from '../assets/testSVG/designers.svg'

// Views
import BenefitsForHackers from '../components/BenefitsForHackers'
import BenefitsForChallengers from '../components/BenefitsForChallengers'

class Benefits extends React.Component {
  render() {
    return (
      <main>
        <FluidContainer tight>
          <PageTitle title="Benefits">
            <PlaylistAddCheckIcon />
          </PageTitle>
          <BenefitsNav />
          <Switch>
            <Route path="/benefits" exact component={BenefitsForHackers} />
            <Route
              path="/benefits/challengers"
              exact
              component={BenefitsForChallengers}
            />
          </Switch>
        </FluidContainer>
      </main>
    )
  }
}

export default Benefits
