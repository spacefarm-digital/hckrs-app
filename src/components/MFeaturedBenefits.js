import React from 'react'
import Isvg from 'react-inlinesvg'

import { Container, Heading, Text, Measure, Image, Flex, Box } from 'rebass'

import PrettyPaper from '../components/extended/PrettyPaper'
import CleanLink from '../components/extended/CleanLink'

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

import businessSVG from '../assets/devs.svg'
import devsSVG from '../assets/company-external.svg'

const MHero = props => (
  <Box bg="p50" py={5} is="section">
    <Container>
      <Heading is="h2" f={3} mb={4} center color="p500">
        Who's this for?
      </Heading>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <PrettyPaper p={3}>
            <Box mb={3} mx="auto" style={{ maxWidth: 300 }}>
              <Isvg src={devsSVG} />
            </Box>
            <Heading f={2} is="h3" mb={2}>
              Challengers
            </Heading>
            <Text mb={3}>
              Create thought-provoking challenges and sub-challenges. Invite
              hackers of your own choice or let them join freely to get swarmed
              with ideas.
            </Text>
            <Flex justify="center">
              <Button raised color="primary" href="benefits">
                Find out more
              </Button>
            </Flex>
          </PrettyPaper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PrettyPaper p={3}>
            <Box mx="auto" mb={3} style={{ maxWidth: 300 }}>
              <Isvg src={businessSVG} />
            </Box>
            <Heading f={2} is="h3" mb={2}>
              Hackers
            </Heading>
            <Text mb={3}>
              Join challenges and submit killer hacks to earn unique prizes.
              Start hacking your way through a challenge alone or together with
              a team.
            </Text>
            <Flex justify="center">
              <Button raised color="primary" href="benefits/challengers">
                Find out more
              </Button>
            </Flex>
          </PrettyPaper>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default MHero
