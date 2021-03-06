import React from 'react'
import Isvg from 'react-inlinesvg'

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

import PrettyPaper from './extended/PrettyPaper'

import designersSVG from '../assets/designers.svg'
import devsSVG from '../assets/devs.svg'
import businessSVG from '../assets/business-people.svg'

import { Heading, Flex, Box, Text, Measure } from 'rebass'

const BenefitsForHackers = props => (
  <Box>
    <Box mb={4}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <PrettyPaper p={3} equalHeight>
            <Box mb={3}>
              <Isvg src={designersSVG} />
            </Box>
            <Heading f={2} mb={1} center>
              Design solutions
            </Heading>
            <Text>
              So, you're one of those people who have too many ideas and little
              place to put them? You've come to the right place - challengers
              across the world are dying to hear you out.
            </Text>
          </PrettyPaper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <PrettyPaper p={3} equalHeight>
            <Box mb={3}>
              <Isvg src={devsSVG} />
            </Box>
            <Heading f={2} mb={1} center>
              Develop products
            </Heading>
            <Text>
              You're capable of turning people's ideas into working, easy to use
              products? Both challengers and fellow hackers would love to talk
              to you. Seriously.
            </Text>
          </PrettyPaper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <PrettyPaper p={3} equalHeight>
            <Box mb={3}>
              <Isvg src={businessSVG} />
            </Box>
            <Heading f={2} mb={1} center>
              Pitch ideas
            </Heading>
            <Text>
              Often a well-thought-out solution isnt't going to cut it. That's
              where your marketing genius comes to shine. Save the day one great
              idea at a time.
            </Text>
          </PrettyPaper>
        </Grid>
      </Grid>
    </Box>
    <Measure mx="auto">
      <Heading is="h2" f={3} mb={1}>
        What are you waiting for?
      </Heading>
      <Text mb={3}>
        Stay in Wonderland and we'll show you how deep the rabbit hole goes.
      </Text>
      <Heading is="h2" f={3} mb={1}>
        One more heading
      </Heading>
      <Text mb={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magnam vero
        maxime non, libero maiores mollitia quo recusandae porro odio a ipsam,
        asperiores accusamus, delectus perspiciatis quos earum tempore expedita.
      </Text>
      <Flex justify="center" wrap>
        <Heading is="h2" f={4} mb={3} center w={1}>
          Sign up to get challenged
        </Heading>
        <Button raised color="primary">
          Sign up
        </Button>
      </Flex>
    </Measure>
  </Box>
)

export default BenefitsForHackers
