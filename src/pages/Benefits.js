import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Isvg from 'react-inlinesvg'

import Grid from 'material-ui/Grid'

import PageTitle from '../components/PageTitle'
import BenefitsNav from '../components/BenefitsNav'
import FluidContainer from '../components/extended/FluidContainer'

import FeaturedChallenge from '../components/FeaturedChallenge'

import StarsIcon from 'material-ui-icons/Stars'

import PrettyPaper from '../components/extended/PrettyPaper'
import { Heading, Box, Text } from 'rebass'

import designersSVG from '../assets/testSVG/designers.svg'

const Benefits = () => (
  <main>
    <FluidContainer>
      <PageTitle title="Benefits">
        <StarsIcon />
      </PageTitle>
      <BenefitsNav />
      <Switch>
        <Route path="#hackers" component={FeaturedChallenge} />
        <Route path="#challengers" component={<Heading>Hello</Heading>} />
      </Switch>
    </FluidContainer>
  </main>
)

export default Benefits
