import React from 'react'
import Isvg from 'react-inlinesvg'
import businessSVG from '../assets/testSVG/devs.svg'
import devsSVG from '../assets/testSVG/company-external.svg'

import { Container, Heading, Text, Measure, Image, Flex, Box } from 'rebass'

import PrettyPaper from '../components/extended/PrettyPaper'
import CleanLink from '../components/extended/CleanLink'

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

const MHero = props => (
  <Box bg="p50" py={5} is="section">
    <Container>
      <Heading is="h2" f={3} mb={4} center color="p500">
        See how Hckrs can help you
      </Heading>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <PrettyPaper p={3}>
            <Flex column>
              <Box mb={3} mx="auto" style={{ maxWidth: 300 }}>
                <Isvg src={devsSVG} />
              </Box>
              <Heading f={2} is="h3" mb={2}>
                I'm a challenger
              </Heading>
              <Text mb={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                consectetur, consequatur minus facere sed dolor
              </Text>
              <Button raised color="primary" href="benefits#challengers">
                I'm a challenger
              </Button>
            </Flex>
          </PrettyPaper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PrettyPaper p={3}>
            <Flex column>
              <Box mx="auto" mb={3} style={{ maxWidth: 300 }}>
                <Isvg src={businessSVG} />
              </Box>
              <Heading f={2} is="h3" mb={2}>
                I'm a hacker
              </Heading>
              <Text mb={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                consectetur, consequatur minus facere sed dolor
              </Text>
              <Button raised color="primary" href="benefits#hackers">
                I'm a hacker
              </Button>
            </Flex>
          </PrettyPaper>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default MHero
