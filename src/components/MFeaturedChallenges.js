import React from 'react'
import styled from 'styled-components'

import FluidContainer from './extended/FluidContainer'

import { Flex, Box, Heading, Measure, Text } from 'rebass'

import Grid from 'material-ui/Grid'

import FeaturedChallenge from '../components/FeaturedChallenge'
import MoneyPrize from '../components/MoneyPrize'

// Data
import normalChallengesData from '../data/normalChallengesData'

const CardTilt = styled(Flex)`
  position: relative;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  > ${Box} {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  > ${Box}:first-child {
    transform-origin: 100% 100%;
    transform: rotateZ(-9deg) scale(0.85) translateX(50%);
  }
  > ${Box}:nth-child(2) {
    z-index: 2;
  }
  > ${Box}:last-child {
    transform-origin: 0% 100%;
    transform: rotateZ(9deg) scale(0.85) translateX(-50%);
  }
  &:hover {
    > ${Box} {
      transform: rotateZ(0deg) scale(1) translateX(0);
    }
  }
`

const MFeaturedChallenges = props => (
  <Box is="section" bg="g50" pt={4}>
    <FluidContainer>
      <Box mb={4}>
        <Heading f={3} is="h2" mb={3} center color="p500">
          Explore challenges
        </Heading>
        <Grid container>
          {normalChallengesData.map((challenge, value) => (
            <Grid xs={12} sm={4} key={value} item>
              <FeaturedChallenge
                featured
                title={challenge.title}
                image={challenge.image}
                logo={challenge.logo}
                numberOfHacks={challenge.numberOfHacks}
                url={challenge.url}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Measure mx="auto">
        <Text mb={4}>
          Still wondering what a challenge exactly is? Explore the most active
          and trending challenges right now.
        </Text>
      </Measure>
      <CardTilt>
        <Box px={3}>
          <MoneyPrize ammount="$10 000" />
        </Box>
        <Box px={3}>
          <MoneyPrize ammount="$20 000" />
        </Box>
        <Box px={3}>
          <MoneyPrize ammount="$5000" />
        </Box>
      </CardTilt>
      <Measure mx="auto">
        <Text mb={4}>
          None of your solutions go unrewarded. Each challenge offers an unique
          set of prizes — from cash to experiences, software licenses, service
          subscriptions and many more.
        </Text>
      </Measure>
    </FluidContainer>
  </Box>
)

export default MFeaturedChallenges
