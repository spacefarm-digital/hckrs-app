import React from 'react'
import Isvg from 'react-inlinesvg'
import heroSVG from '../assets/testSVG/what-is-hckrs.svg'

import { Heading, Text, Measure, Image, Flex, Box } from 'rebass'

import FluidContainer from '../components/extended/FluidContainer'

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

const MHero = props => (
  <Box bg="#fff" pt={[4, 4, 5]} is="section">
    <FluidContainer mx={-3} gutterless>
      <Grid container align="center" spacing={0}>
        <Grid item xs={12} xl={5}>
          <Flex column align="center">
            <Box mb={[4, 4, 5]} px={3}>
              <Heading f={[4, 4, 4, 5]} mb={2} color="p600" center>
              Welcome to Hckrs
              </Heading>
              <Measure mb={3}>
              Where your industry's challenges are solved by a wild bunch of talented designers, engineers, and tech experts we like to call hackers. 
              </Measure>
              <Flex justify="center">
                <Button raised color="accent" href="/signup">
                  Sign up
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Grid>
        <Grid item xs={12} xl={7}>
          <Box px={3} mx="auto" style={{ maxWidth: 1024 }}>
            <Isvg src={heroSVG} style={{ display: 'block' }} />
          </Box>
        </Grid>
      </Grid>
    </FluidContainer>
  </Box>
)

export default MHero
